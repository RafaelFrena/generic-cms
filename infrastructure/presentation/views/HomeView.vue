<script lang="ts">
import { defineComponent } from 'vue';
import CustomTable from '../components/table/CustomTable.vue';

export default defineComponent({
  components: {
    CustomTable
  },
  // setup() {
    // const companies: {
    //     name: string,
    //     contact: string,
    //     country: string
    //   }[] = [
    //   {
    //     name: "Alfreds Futterkiste",
    //     contact: "Maria Anders",
    //     country: "Germany"
    //   },
    //   {
    //     name: "Alfreds Futterkiste",
    //     contact: "Maria Anders",
    //     country: "Germany"
    //   },
    //   {
    //     name: "Alfreds Futterkiste",
    //     contact: "Maria Anders",
    //     country: "Germany"
    //   },
    //   {
    //     name: "Alfreds Futterkiste",
    //     contact: "Maria Anders",
    //     country: "Germany"
    //   }
    // ]

    // return {
    //   companies
    // }
  // }
});
</script>

<template>
  <div class="home-view">
    <header class="header">
      <h2 class="header__title">Título da página</h2>
      <p>The place where everything began</p>
      <p>The taste of life feels better with you</p>
      <p>You will never change for me</p>
      <p>I will be forever lost in the woods</p>
      <p>I've been struggling since I exist</p>
      <p>I can't distinguish life from death</p>
      <p>When am I gonna start to live over again?</p>
      <p>When will you stand up and say my name?</p>
      <p>Is this going to be over by tomorrow morning</p>
      <p>You're not to blame</p>
      <p></p>
    </header>
    <div class="table-settings">
      <div class="table-settings__filters">
        <button>Filtro 1</button>
        <button>Filtro 2</button>
        <button>Filtro 3</button>
      </div>
      <div class="table-settings__order">
        <span>Visualizar como: </span>
        <select class="select" name="order" id="order">
          <option value="code">Tabela</option>
          <option value="name">Blocos</option>
        </select>
      </div>
    </div>
    <CustomTable>
      <template slot="head">
        <div>head</div>
        <!-- <HeaderColumn label="Empresa" />
        <HeaderColumn label="Contato" />
        <HeaderColumn label="País" /> -->
      </template>
      <template slot="body">
        <div>body</div>
        <!-- <Row v-for="(company, index) of companies" :key="index">
          <TableColumn :label="company.name" />
          <TableColumn :label="company.contact" />
          <TableColumn :label="company.country" />
        </Row> -->
      </template>
    </CustomTable>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.view__header {
  display: flex;
  justify-content: space-between;
}

.header__title {
  font-size: 1.5rem;
}

.table-settings {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.table-settings__filters {
  display: flex;
  gap: 0.5rem;
}

td, th {
  width: 30%;
  text-align: left;
}

.select {
  padding: .2rem;
  color: #403c44;
  background-color: #bebebe;
  outline: 3px solid #bebebe;
  cursor: pointer;
}
</style>