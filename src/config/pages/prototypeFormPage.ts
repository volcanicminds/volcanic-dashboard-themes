const formPageConfig = {
  title: "Prototype Form Page",
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
    {
      componentType: "Form",
      title: "Form",
      titleText: "formTitle",
      sendButtonLabel: "sendButtonLabel",
      dataFields: [
        {
          label: "firstName",
          data: "firstName",
          required: true,
          requiredError: "firstNameRequiredError",
        },
        {
          label: "lastName",
          data: "lastName",
          required: true,
          requiredError: "lastNameRequiredError",
        },
        { label: "phone", data: "phone", required: false },
        {
          label: "email",
          data: "email",
          required: true,
          requiredError: "emailRequiredError",
        },
      ],
    },
  ],
};

export default formPageConfig;
