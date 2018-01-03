import Api from '@/services/Api';

export default {
  searchResult(searchInput) {
    return Api().get(`search?NAME=${searchInput}`);
  },
};