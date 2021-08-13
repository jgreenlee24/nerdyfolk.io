<template>
  <v-container>
    <v-alert
      dismissible
      text
      dense
      color="warning"
      icon="$vuetify.icons.mdiInformationOutline"
      border="left"
    >
      <strong>Two layouts available!</strong>
      Toggle your prefered layout by clicking the 
      <v-icon
        small
        color="warning lighten-4"
      >
        $vuetify.icons.mdiTable
      </v-icon> or 
      <v-icon
        small
        color="warning lighten-4"
      >
        $vuetify.icons.mdiMenu
      </v-icon> buttons.
    </v-alert>
    <v-row>
      <v-col cols="12">
        <BaseSheet>
          <div class="d-flex flex-sm-row flex-column gap-lg align-center justify-space-between">
            <v-text-field
              v-model="search"
              solo
              :background-color="glassmorph ? 'glass' : 'base lighten-1'"
              placeholder="Search Product..."
              clearable
              prepend-inner-icon="$vuetify.icons.mdiMagnify"
              hide-details
              style="max-width: 350px"
              rounded
            />

            <div>
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    :color="displayType == 'table' ? 'secondary' : ''"
                    v-bind="attrs"
                    v-on="on"
                    @click="displayType = 'table'"
                  >
                    <v-icon>$vuetify.icons.mdiTable</v-icon>
                  </v-btn>
                </template>
                <span>Table View {{ displayType == 'table' ? '(Active)' : '' }}</span>
              </v-tooltip>
              
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <v-btn
                    icon
                    :color="displayType == 'grid' ? 'secondary' : ''"
                    class="mr-4"
                    v-bind="attrs"
                    v-on="on"
                    @click="displayType = 'grid'"
                  >
                    <v-icon>$vuetify.icons.mdiMenu</v-icon>
                  </v-btn>
                </template>
                <span>Grid View {{ displayType == 'grid' ? '(Active)' : '' }}</span>
              </v-tooltip>
              
              <v-btn
                color="primary"
                outlined
              >
                <v-icon
                  left
                  small
                >
                  $vuetify.icons.mdiTableArrowRight
                </v-icon>
                Export
              </v-btn>
            </div>
          </div>

          <div class="my-6">
            <v-data-table
              v-if="displayType == 'table'"
              class="custom-table custom-table-hoverable"
              :headers="headers"
              :items="products"
              :search="search"
              show-select
              checkbox-color="secondary"
            >
              <template #item.status="{ item }">
                <v-chip
                  small
                  :color="getStatus(item.stock).color"
                >
                  <v-icon
                    x-small
                    left
                    :color="getStatus(item.stock).color"
                  >
                    {{ getStatus(item.stock).icon }}
                  </v-icon>
                  {{ getStatus(item.stock).text }}
                </v-chip>
              </template>
              
              <template #item.rating="{ item }">
                <div class="d-flex align-center">
                  <v-rating
                    background-color="orange"
                    color="orange"
                    length="1"
                    size="20"
                    half-increments
                    readonly
                    :value="5"
                  >
                    $vuetify.icons.mdiStar
                  </v-rating>
                  <span class="caption mt-1">(5)</span>
                </div>
              </template>

              <template #item.product_name="{ item }">
                <div class="d-flex align-center justify-start">
                  <v-img
                    :src="item.src"
                    cover
                    class="rounded flex-grow-0 mr-2"
                    width="36"
                    height="36"
                  />
                  <span class="font-weight-medium">{{ item.product_name }}</span>
                </div>
              </template>

              <template #item.price="{ item }">
                ${{ item.price }}
              </template>

              <template #item.actions="{ item }">
                <v-icon
                  small
                  @click="editItem(item)"
                >
                  $vuetify.icons.mdiPencil
                </v-icon>
              </template>
            </v-data-table>
            <div v-else>
              <v-row>
                <v-col
                  v-for="(item, index) in filteredProducts"
                  :key="index"
                  cols="12"
                  md="6"
                >
                  <v-card
                    height="100%"
                    :color="glassmorph ? 'glass' : '#12143a'"
                    class="pa-4 mb-2"
                    to="ecommerce/edit"
                  >
                    <v-row>
                      <v-col
                        cols="12"
                        lg="3"
                      >
                        <v-img
                          :src="item.src"
                          width="100"
                          height="100"
                          class="mx-auto"
                          contain
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        lg="9"
                      >
                        <div class="d-flex flex-column align-baseline align-md-center align-md-center flex-md-row justify-md-space-between">
                          <div class="font-weight-bold">
                            {{ item.product_name }} <span class="caption ml-1">#{{ item.id }}</span>
                          </div>
                          <div class="d-flex align-center">
                            <v-rating
                              background-color="orange"
                              color="orange"
                              length="5"
                              size="20"
                              half-increments
                              readonly
                              :value="5"
                            >
                              $vuetify.icons.mdiStar
                            </v-rating>
                            <span class="caption mt-1">(5)</span>
                          </div>
                        </div>
                        
                        <div class="caption">
                          <span class="font-weight-medium">Category:</span>  {{ item.department }}
                        </div>
                        <div class="caption">
                          <span class="font-weight-medium">Stock:</span>  {{ item.stock }}
                        </div>
                        <div class="caption mb-2">
                          <span class="font-weight-medium">Price:</span>  ${{ item.price }}
                        </div>
                       
                        <div>
                          <v-chip
                            small
                            :color="getStatus(item.stock).color"
                          >
                            <v-icon
                              x-small
                              left
                              :color="getStatus(item.stock).color"
                            >
                              {{ getStatus(item.stock).icon }}
                            </v-icon>
                            {{ getStatus(item.stock).text }}
                          </v-chip>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </div>
        </BaseSheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      displayType: 'grid', // table || grid
      search: null,
      headers: [
        {
          text: "ID",
          align: "start",
          filterable: false,
          value: "id",
        },
        { text: "Product", value: "product_name" },
        { text: "Category", value: "department" },
        { text: "Price", value: "price" },
        { text: "Rating", value: "rating", width: "100px" },
        { text: "Stock", value: "stock" },
        { text: "Status", value: "status", sortable: false },
        { text: "Actions", value: "actions", sortable: false },
      ],
      products: [
        {
          id: 3515,
          src: require(`~/assets/img/products/76e9acab-1510-415f-b677-062ad5a6ea5d.png`),
          color: "lilac",
          department: "Tools",
          material: "Aluminum",
          product_name: "Synergistic Leather Watch",
          price: 88.55,
          price_string: "7.01",
          promo_code: "KillerDeal709395",
          stock: 12,
        },
        {
          id: 3352,
          src: require(`~/assets/img/products/bde46cb2-74e1-45a2-a694-fcbe0784c2f8.png`),
          color: "emerald",
          department: "Music",
          material: "Steel",
          product_name: "Gorgeous Plastic Wallet",
          price: 13.64,
          price_string: "5.73",
          promo_code: "AmazingDiscount308781",
          stock: 34,
        },
        {
          id: 4334,
          src: require(`~/assets/img/products/5b881c2d-6dfe-4873-8645-87fbb20fd493.png`),
          color: "tan",
          department: "Home \u0026 Clothing",
          material: "Leather",
          product_name: "Ergonomic Silk Keyboard",
          price: 90.95,
          price_string: "5.65",
          promo_code: "GoodPromotion141836",
          stock: 0,
        },
        {
          id: 8037,
          src: require(`~/assets/img/products/439c4705-9a0f-47e5-bb84-526da7b5669f.png`),
          color: "blue",
          department: "Books",
          material: "Paper",
          product_name: "Work Computer",
          price: 75.91,
          price_string: "9.99",
          promo_code: "PremiumSale946791",
          stock: 6,
        },
        {
          id: 6080,
          src: require(`~/assets/img/products/0a03ade6-6906-4bbe-8130-a38de955c507.png`),
          color: "fuchsia",
          department: "Grocery",
          material: "Leather",
          product_name: "Logitech Keyboard",
          price: 79.20,
          price_string: "7.54",
          promo_code: "CoolCode672982",
          stock: 7,
        },
        {
          id: 5528,
          src: require(`~/assets/img/products/0abaeab1-66c8-4bf9-b619-a54baad5942d.png`),
          color: "amethyst",
          department: "Clothing \u0026 Kids",
          material: "Steel",
          product_name: "Kids T-Shirt",
          price: 68.64,
          price_string: "1.31",
          promo_code: "PremiumCode230438",
          stock: 16,
        },
        {
          id: 4017,
          src: require(`~/assets/img/products/73dc7e10-faed-434a-a5cb-e51a6c7f3e79.png`),
          color: "azure",
          department: "Books \u0026 Toys",
          material: "Wooden",
          product_name: "Rustic Steel Bag",
          price: 74.68,
          price_string: "8.52",
          promo_code: "AmazingCode296750",
          stock: 33,
        },
        {
          id: 6253,
          src: require(`~/assets/img/products/d67d4e84-ffb3-4df7-81ad-cc030e3fff7b.png`),
          color: "peach",
          department: "Books",
          material: "Steel",
          product_name: "Gorgeous Leather Hat",
          price: 59.13,
          price_string: "2.73",
          promo_code: "CoolPromotion699008",
          stock: 29,
        },
        {
          id: 9105,
          src: require(`~/assets/img/products/placeholder.png`),
          color: "mauve",
          department: "Kids \u0026 Games",
          material: "Silk",
          product_name: "Enormous Paper Bag",
          price: 70.94,
          price_string: "5.78",
          promo_code: "SweetDeal488733",
          stock: 0,
        },
        {
          id: 7553,
          src: require(`~/assets/img/products/838d5e35-dd3e-4f65-b30f-ea9e3915927c.png`),
          color: "fuchsia",
          department: "Games \u0026 Jewelry",
          material: "Cotton",
          product_name: "Small Silk Plate",
          price: 30.45,
          price_string: "2.77",
          promo_code: "KillerSale561340",
          stock: 4,
        },
        {
          id: 7178,
          src: require(`~/assets/img/products/785ed3b1-efd2-4b74-8ad5-2689a545b0a3.png`),
          color: "azure",
          department: "Games \u0026 Grocery",
          material: "Iron",
          product_name: "Rustic Rubber Bag",
          price: 86.42,
          price_string: "5.17",
          promo_code: "AmazingDiscount901023",
          stock: 34,
        },
        {
          id: 3479,
          src: require(`~/assets/img/products/placeholder.png`),
          color: "lavender",
          department: "Games \u0026 Sports",
          material: "Paper",
          product_name: "Marble Watch",
          price: 16.35,
          price_string: "6.19",
          promo_code: "KillerSale656984",
          stock: 7,
        },
        {
          id: 9383,
          src: require(`~/assets/img/products/placeholder.png`),
          color: "purple",
          department: "Grocery \u0026 Games",
          material: "Wool",
          product_name: "Marble Plate",
          price: 32.36,
          price_string: "5.52",
          promo_code: "PremiumDiscount977776",
          stock: 11,
        },
        {
          id: 3237,
          src: require(`~/assets/img/products/placeholder.png`),
          color: "sapphire",
          department: "Clothing \u0026 Electronics",
          material: "Linen",
          product_name: "Heavy Duty Paper Watch",
          price: 55.63,
          price_string: "7.31",
          promo_code: "GreatSavings788438",
          stock: 0,
        },
        {
          id: 2112,
          src: require(`~/assets/img/products/placeholder.png`),
          color: "pink",
          department: "Health",
          material: "Steel",
          product_name: "Lightweight Silk Chair",
          price: 91.48,
          price_string: "5.11",
          promo_code: "PremiumDiscount378907",
          stock: 0,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["glassmorph"]),
    filteredProducts() {
      if (!this.search) return this.products;

      return this.products.filter(product => product.product_name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1);
    }
  },
  methods: {
    editItem(item) {
      // redirect to product detail page
      this.$router.push({
        name: "ecommerce-edit",
        params: {
          id: item.id,
        },
      });
    },
    getStatus(val) {
      if (val == 0) {
        return {
          color: "error",
          text: "Out of Stock",
          icon: "$vuetify.icons.mdiCloseCircle",
        };
      }

      if (val < 10 && val > 0) {
        return {
          color: "warning",
          text: "Low Stock",
          icon: "$vuetify.icons.mdiAlertCircle",
        };
      }

      return {
        color: "success",
        text: "In Stock",
        icon: "$vuetify.icons.mdiCheckCircle",
      };
    },
  },
};
</script>