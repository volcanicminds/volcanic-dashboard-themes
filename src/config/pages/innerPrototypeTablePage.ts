import prototypeTableConfig from "../components/prototypeTable";

const innerTableCardConfig = {
  title: "Inner Prototype Table Page",
  components: [
    {
      componentType: "Table",
      title: "Inner Table",
      url: "https://api.thecatapi.com/v1/images/search?limit=10",
      tableConfigColumns: prototypeTableConfig,
    },
  ],
};

export default innerTableCardConfig;
