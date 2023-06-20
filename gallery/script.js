const data = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/0/800",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/1/800",
  },
  {
    id: "2",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/2/800",
  },
  {
    id: "3",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/3/800",
  },
  {
    id: "4",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/4/800",
  },
  {
    id: "5",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/5/800",
  },
  {
    id: "6",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/6/800",
  },
  {
    id: "7",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/7/800",
  },
  {
    id: "8",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/8/800",
  },
  {
    id: "9",
    author: "Alejandro Escamilla",
    url: "https://picsum.photos/id/9/800",
  },
];

data.forEach((item) => {
  const galleryElement = document.querySelector(".gallery");
  const galleryItem = document.createElement("figure");
  const image = document.createElement("img");
  galleryItem.classList.add("gallery__item");
  image.src = item.url;
  galleryItem.appendChild(image);
  galleryElement.appendChild(galleryItem);
});
