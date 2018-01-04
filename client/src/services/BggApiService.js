import Api from '@/services/Api';

export default {
  searchResult(searchInput) {
    return Api().get(`bgg/search?NAME=${searchInput}`);
  },
};