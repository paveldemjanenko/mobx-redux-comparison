import { observable, action, runInAction, decorate } from 'mobx';
import axios from 'axios';

export default class GalleryStore {
    term = "";
    images = [];
    status = "initial";

    fetchImages = async term => {
        this.status = "searching";
        this.term = term;
        this.images = [];
    
        try {
          const response = await axios.get(
            "https://api.unsplash.com/search/photos",
            {
              params: {
                client_id:
                  "0414177cd359277e26787c56c0c8a99046dc991c1f92d609383621b305bee317",
                query: term
              }
            }
            );
            this.setImages(response.data.results);
        } catch (error) {
            runInAction(() => {
                this.status = "error";
            });
        }
      };

        setImages = images => {
        this.images = images;
        this.status = "done";
      };
}
decorate(GalleryStore, {
    term: observable,
    images: observable,
    status: observable,
    fetchImages: action,
    setImages: action
})