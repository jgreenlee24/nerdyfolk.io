<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="9"
        >
          <TasksWrapper />
        </v-col>
        <v-col
          cols="12"
          lg="3"
        >
          <BaseSheet
            data-aos="fade-up"
            data-aos-duration="1000"
            class="mb-6"
          >
            <TasksDatePicker />
          </BaseSheet>
          <BaseSheet
            class-names="py-2 px-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <TasksMilestones />
          </BaseSheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>