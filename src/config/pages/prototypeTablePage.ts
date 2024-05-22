import prototypeTableConfig from "../components/prototypeTable";

const tableCardConfig = {
  title: "Prototype Table Page",
  components: [
    {
      componentType: "Table",
      title: "Table",
      url: "https://api.thecatapi.com/v1/images/search?limit=10",
      tableConfigColumns: prototypeTableConfig,
    },
  ],
};

export default tableCardConfig;
