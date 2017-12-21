<template>
  <div>
  <b-nav-form>
  <b-form-input
    size="sm"
    class="mr-sm-2"
    type="text"
    placeholder="Search"
    v-model='searchInput'
    @change='search'
  />
  <b-button size="sm" class="my-2 my-sm-0" type="submit" @click='search'>Search</b-button>
  </b-nav-form>
  <li v-for="n in searchResult">{{ n }}</li>
  </div>
</template>

<script>
import BggApi from '@/services/BggApi'
export default {
  data() {
    return {
      searchInput: '',
      searchResult: [],
    };
  },
  methods: {
    async search() {
      const response = await BggApi.searchResult(
        this.searchInput
      )

      const responseData = response.data.allResults;
      console.log(responseData);
      this.searchResult = [];
      responseData.forEach( (element) => {
        const boardgameItem = element.items.item
        if (boardgameItem.name.length > 0) {
          console.log(boardgameItem.name[0].value, boardgameItem.yearpublished.value);
          this.searchResult.push(`${boardgameItem.name[0].value} ${boardgameItem.yearpublished.value}`);
        } else {
          console.log(boardgameItem.name.value);
          this.searchResult.push(boardgameItem.name.value);
        }
      })
    }
  }
}
</script>
