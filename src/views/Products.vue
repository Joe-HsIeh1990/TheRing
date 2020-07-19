<template>
  <div class="products">
    <Alert />
    <loading :active.sync="isLoading"></loading>
    <header class="custom d-flex">
      <div class="m-auto text-white">
        <h1 class="text-white">Shop Store</h1>
      </div>
    </header>
    <div class="Introduction container-fluid mt-2">
      <ul class="Introduction-container list-unstyled row justify-content-between mb-0">
        <li class="col-12 col-md-4 col-lg-3">
          <div class="drop">
            <ul class="Introduction-list list-unstyled">
              <li
                class="Introduction-item "
                v-for="boxitem in menu"
                :class="{ 'active' : boxitem.style , 'activeall' : boxitem.kind }"
                :key="boxitem.zoe"
                @click.stop="dropitem(boxitem.zoe) ;  boxitem.took && currentcontext(boxitem.special)"
              >
                <h5 class="Introduction-item-title p-3 text-center" :id="boxitem.name">
                  <span
                    class="Introduction-plus"
                    :class="{ 'active' : boxitem.style }"
                    :id="boxitem.zoe"
                  ></span>
                  {{ boxitem.name }}
                </h5>
                <ul class="Introduction-content list-unstyled" :id="boxitem.dropid">
                  <li
                    class="Introduction-content-list"
                    :class="{'active': mind.kind}"
                    v-for="mind in boxitem.rol"
                    :key="mind.zoe"
                    @click.stop="currentcontext(mind.zoe)"
                  >
                    <h5 class="Introduction-content-title p-3 text-center">
                      <span class="Introduction-contnet-plus">{{ mind.name }}</span>
                    </h5>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li class="commodity d-flex flex-column col-12 col-md-8 col-lg-9 mt-2 mt-md-0">
          <ul
            class="commodity-content col-12 mx-auto row list-unstyled px-0 align-items-center "
          >
            <li
              class="commodity-list col-12 col-md-6 col-lg-3 mb-3"
              v-for="item in products"
              :key="item.id"
            >
              <a
                href="`#/custom/detail/${item.id}`"
                @click.prevent="ToProductsDetaill(item.id)"
                class="text-decoration-none "
              >
                <div class="card d-flex flex-row flex-md-column">
                  <div class="card-img" @mousemove.stop="HoverShow">
                    <img
                      :src="item.imageUrl"
                      class="card-img-top img-fluid"
                      :data-num="item.id"
                      alt
                    />
                    <div
                      class="card-hover d-flex justify-content-around align-items-center"
                      v-if="item.is_enabled"
                      :data-num="item.id"
                    >
                      <a
                        href="`#/custom/detail/${item.id}`"
                        class="btn btn-outline-warning"
                        @click.prevent="ToProductsDetaill(item.id)"
                        :data-num="item.id"
                      >more</a>
                      <a
                        href="#"
                        class="btn btn-outline-warning"
                        :data-num="item.id"
                        @click.stop="getCurrentProduct(item.id)"
                      >加入購物車</a>
                    </div>
                  </div>
                  <div class="card-body border">
                    <h5 class="card-title font-weight-bold text-dark">{{ item.title }}</h5>
                    <p class="card-text text-dark">{{ item.content }}</p>
                    <div class="d-flex justify-content-between mt-2">
                      <p class="text-danger font-weight-bold">特價{{ item.price }}!!</p>
                    </div>
                    <div class="card-text-btn mt-2">
                      <a
                        href="`#/custom/detail/${item.id}`"
                        class="btn btn-info p-1 mr-2"
                        @click.prevent="ToProductsDetaill(item.id)"
                      >more</a>
                      <a
                        href="#"
                        class="btn btn-primary p-1"
                        @click.stop="getCurrentProduct(item.id)"
                      >加入購物車</a>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <PaginationPhone
            :pages="pagination"
            @emitPages="GetProducts"
            class="page-phone align-self-center mx-auto my-3"
          ></PaginationPhone>
          <Pagination
            :pages="pagination"
            @emitPages="GetProducts"
            class="page-dash align-self-center mx-auto my-3"
          ></Pagination>
        </li>
      </ul>
    </div>
    <CardModal :theProduct="temproduct" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import PaginationPhone from "../components/PaginationPhone";
import Pagination from "../components/Pagination";
import CardModal from "../components/CardModal";
import Alert from "../components/AlertMessage";
import $ from "jquery";
export default {
  components: {
    Pagination,
    CardModal,
    PaginationPhone,
    Alert
  },
  data() {
    return {
      hover_btn: true,
      plus_icon: false,
      Btn_rwd: false,
      phoneCard: false,
      menu: [
        {
          name: "All",
          zoe: "all",
          special: "all",
          took: true,
          style: false,
          kind: false
        },
        {
          name: "魔戒-秩序陣營",
          zoe: "goodside",
          took: false,
          style: false,
          dropid: "order",
          rol: [
            {
              name: "夏爾",
              zoe: "theshire",
              kind: false
            },
            {
              name: "剛鐸",
              zoe: "Gondor",
              kind: false
            },
            {
              name: "洛汗",
              zoe: "Rohan",
              kind: false
            },
            {
              name: "瑞文戴爾",
              zoe: "Rivendell",
              kind: false
            },
            {
              name: "凱薩督姆",
              zoe: "Khazad-Dum",
              kind: false
            }
          ]
        },
        {
          name: "魔戒-混沌陣營",
          zoe: "evilside",
          took: false,
          style: false,
          dropid: "dark",
          rol: [
            {
              name: "艾辛格",
              zoe: "isengard",
              kind: false
            },
            {
              name: "魔多",
              zoe: "mordor",
              kind: false
            }
          ]
        },
        {
          name: "哈比人-秩序陣營",
          zoe: "hobbitgood",
          took: false,
          style: false,
          dropid: "orderhobbit",
          rol: [
            {
              name: "埃爾博",
              zoe: "LonelyMountain",
              kind: false
            },
            {
              name: "鐵丘陵矮人",
              zoe: "IronHills",
              kind: false
            },
            {
              name: "幽暗密林",
              zoe: "Mirkwood",
              style: false
            }
          ]
        },
        {
          name: "哈比人-混沌陣營",
          zoe: "hobbitevil",
          took: false,
          style: false,
          dropid: "darkhobbit",
          rol: [
            {
              name: "阿佐格軍團",
              zoe: "azog",
              kind: false
            }
          ]
        },
        {
          name: "遊戲相關內容",
          zoe: "some",
          took: false,
          style: false,
          dropid: "book",
          rol: [
            {
              name: "戰爭規則書",
              zoe: "book",
              kind: false
            }
          ]
        }
      ]
    };
  },
  methods: {
    getCurrentProduct(id) {
      this.$store.dispatch("productsmodules/getCurrentProduct", id).then(() => {
        $("#productModal").modal("show");
      });
    },
    ToProductsDetaill(id) {
      this.$router.push(`/custom/detail/${id}`);
    },
    currentcontext(e) {
      let vm = this;
      vm.$store.commit("productsmodules/CURRENTCONTEXT", e);
      vm.GetProducts();
      vm.menu.forEach(item => {
        if (e == item.special) {
          if (item.kind == false) {
            item.kind = true;
          }
        } else {
          item.kind = false;
        }
        for (let i in item.rol) {
          if (e == item.rol[i].zoe) {
            if (item.rol[i].kind == false) {
              item.rol[i].kind = true;
            } else {
              item.rol[i].kind = false;
            }
          } else if (e !== item.rol[i].zoe) {
            item.rol[i].kind = false;
          }
        }
      });
    },
    dropitem(e) {
      let vm = this;
      vm.menu.forEach(item => {
        if (e === item.zoe && e !== item.special) {
          if (item.style == false) {
            item.style = true;
            $(`#${item.dropid}`).slideDown("slow");
          } else {
            item.style = false;
            $(`#${item.dropid}`).slideUp("slow");
          }
        }
      });
    },
    HoverShow(e) {
      let take = e.target.dataset.num;
      this.$store.commit("productsmodules/HOVERLIST", take);
    },
    ...mapActions("productsmodules", ["GetProducts"])
  },
  computed: {
    ...mapGetters(["isLoading"]),
    ...mapGetters("productsmodules", [
      "products",
      "pagination",
      "temproduct",
      "contxt",
      "txt"
    ]),
    ...mapGetters("cardmodules", ["cartItem"])
  },
  mounted() {
    $(".Introduction-content").hide();
    $(".card-hover").hide();
    let ALLid = document.getElementById("All");
    let removeplus = document.getElementById("all");
    ALLid.removeChild(removeplus);
  },
  created() {
    this.GetProducts();
  }
};
</script>

<style>
</style>