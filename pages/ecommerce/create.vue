<template>
  <v-container>
    <v-row class="mb-16">
      <v-col
        cols="12"
        lg="8"
      >
        <BaseSheet>
          <h4 class="mb-4">
            <span class="red--text">*</span>
            Product Information
          </h4>
          <v-text-field
            value=""
            counter
            maxlength="25"
            hint="Maximum characters: 25"
            label="Product Name"
            clearable
            outlined
            class="my-2"
          />
          <v-textarea
            outlined
            rows="4"
            label="Description"
            placeholder="Write a description..."
            hide-details
            clearable
            value=""
          />

          <h4 class="my-4">
            <span class="red--text">*</span>
            Product Pricing
          </h4>
          <v-text-field
            value=""
            type="number"
            label="Product Price"
            prefix="$"
            clearable
            outlined
            class="my-2"
          />
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="py-0"
            >
              <v-text-field
                value=""
                type="number"
                prefix="$"
                label="Compare Price"
                clearable
                outlined
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
              class="py-0"
            >
              <v-text-field
                prefix="%"
                label="Tax Rate"
                clearable
                outlined
              />
            </v-col>
          </v-row>
        </BaseSheet>
      </v-col>
      <v-col
        cols="12"
        lg="4"
      >
        <BaseSheet>
          <h4 class="mb-4">
            <span class="red--text">*</span>
            Product Image
          </h4>
          <div>
            <label class="align-center custom-input d-flex flex-column justify-center w-100 cursor-pointer">
              <input
                id="productImageInput"
                type="file"
                @change="onFileChange"
              >
              <div
                v-if="showInput"
                class="v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default primary"
              >
                <v-icon
                  left
                  small
                >$vuetify.icons.mdiArrowUp</v-icon>
                Upload File
              </div> 
              <div>{{ fileName }}</div>
            </label>
            <v-btn
              v-if="!showInput"
              text
              color="error"
              class="text-center w-100 mt-2"
              @click="showInput = true"
            >
              <v-icon
                size="18"
                left
              >
                $vuetify.icons.mdiClose
              </v-icon> 
              Remove
            </v-btn>
          </div>

          <h4 class="my-4">
            Product Categories
          </h4>
          <v-autocomplete
            v-model="values"
            :items="items"
            outlined
            chips
            dense
            color="primary"
            multiple
            hide-details
            label="Categories"
          >
            <template #selection="data">
              <v-chip
                v-bind="data.attrs"
                :input-value="data.selected"
                close      
                color="primary" 
                small         
              >
                {{ data.item }}
              </v-chip>
            </template>
          </v-autocomplete>
        </BaseSheet>
      </v-col>
    </v-row>

    <v-bottom-navigation
      absolute
      height="45"
    >
      <v-row no-gutters>
        <v-col cols="6">
          <v-btn
            color="base"
            block
            height="100%"
            @click="$router.push('/ecommerce')"
          >
            <span class="error--text"> <v-icon
              left
              small
            >
              $vuetify.icons.mdiClose
            </v-icon>Cancel</span>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn
            color="#11183d"
            block
            height="100%"
            @click="$router.push('/ecommerce')"
          >
            <span class="success--text"> <v-icon
              left
              small
            >
              $vuetify.icons.mdiCheck
            </v-icon>Add New Product</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-bottom-navigation>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ['foo', 'bar', 'fizz', 'buzz'],
      values: [],
      fileName: null,
      showInput: true,
    };
  },
  methods: {
    onFileChange() {
      const productImageInput = document.getElementById('productImageInput'); 
      this.fileName = productImageInput.files.item(0).name;
    }
  },
};
</script>

<style lang="scss" scoped>
input[type="file"] {
    display: none;
}

.custom-input {
  border: 2px dashed #e6ebf1;
  border-radius: 0.625rem;
  min-height: 270px;
  display: flex;
  align-items: center;
}

.save-button {
    background: rgb(0 255 8 / 12%) !important;
    color: #00ff7a !important;
}
</style>