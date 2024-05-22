const formPageConfig = {
  title: "Home",
  components: [
    {
      componentType: "Card",
      title: "Card",
      url: "https://api.thecatapi.com/v1/images/0XYvRd7oD",
      dataFields: [
        { label: "id:", data: "id" },
        { label: "height:", data: "id" },
        { label: "breeds:", data: "breeds.name" },
      ],
    },
  ],
};

export default formPageConfig;
