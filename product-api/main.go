package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

type product struct {
	ID          	string `json:"ID"`
	Title       	string `json:"Title"`
	Description     string `json:"Description"`
	Image			string `json:"Image"`
}

type allProducts []product

var products = allProducts{
	{
		ID:          "1",
		Title:       "svs Product 1",
		Description: "Lorem ipsum dolor sit amet 1",
		Image: 		 "https://cdn.dsmcdn.com/ty117/product/media/images/20210524/17/91186489/78187593/1/1_org_zoom.jpg",
	},
	{
		ID:          "2",
		Title:       "svs Product 2",
		Description: "Lorem ipsum dolor sit amet 2",
		Image: 		 "https://cdn.dsmcdn.com/ty93/product/media/images/20210404/09/db7326f9/57616611/1/1_org_zoom.jpg",
	},
	{
		ID:          "3",
		Title:       "svs Product 3",
		Description: "Lorem ipsum dolor sit amet 3",
		Image: 		 "https://cdn.dsmcdn.com/mnresize/400/-/ty346/product/media/images/20220303/16/62047329/402909065/1/1_org_zoom.jpg",
	},
	{
		ID:          "4",
		Title:       "svs Product 4",
		Description: "Lorem ipsum dolor sit amet 4",
		Image: 		 "https://cdn.dsmcdn.com/mnresize/400/-/ty285/product/media/images/20220102/16/20426729/349821701/1/1_org_zoom.jpg",
	},
	{
		ID:          "5",
		Title:       "svs Product 5",
		Description: "Lorem ipsum dolor sit amet 5",
		Image: 		 "https://cdn.dsmcdn.com/mnresize/400/-/ty152/product/media/images/20210803/10/115278070/218631502/0/0_org_zoom.jpg",
	},
	{
		ID:          "6",
		Title:       "svs Product 6",
		Description: "Lorem ipsum dolor sit amet 6",
		Image: 		 "https://cdn.dsmcdn.com/ty207/product/media/images/20211025/14/155914079/117736341/1/1_org_zoom.jpg",
	},
	{
		ID:          "7",
		Title:       "svs Product 7",
		Description: "Lorem ipsum dolor sit amet 7",
		Image: 		 "https://cdn.dsmcdn.com/ty144/product/media/images/20210713/21/110198469/12980769/2/2_org_zoom.jpg",
	},
	{
		ID:          "8",
		Title:       "svs Product 8",
		Description: "Lorem ipsum dolor sit amet 8",
		Image: 		 "https://cdn.dsmcdn.com/mnresize/400/-/ty330/product/media/images/20220214/16/50210795/341161543/1/1_org_zoom.jpg",
	},
}


func getAllProducts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	json.NewEncoder(w).Encode(products)
}

func main() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/products", getAllProducts).Methods("GET", "OPTIONS")
	log.Fatal(http.ListenAndServe(":" + os.Getenv("PORT"), router))
}

