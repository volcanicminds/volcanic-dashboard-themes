import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Stack, Typography, Button, Box, Grid, TextField } from "@mui/material";
import { t } from "i18next";

export default function Form(config: any) {

const schemaConfig: { [key: string]: yup.StringSchema } =
    config.config.dataFields.reduce(
        (acc: { [key: string]: yup.StringSchema }, item: any) => {
            acc[item.data] = yup.string();
            if (item.required) {
                acc[item.data] = acc[item.data].required();
            }
            return acc;
        },
        {}
    );

const schema = yup.object().shape(schemaConfig);

  function isFieldRequired(field: string, schema: any) {
    let actualSchema = schema.describe().fields[field];

    if (field.includes(".")) {
      const innerFields = field.split(".");

      actualSchema =
        schema.describe().fields[innerFields[0]].fields[innerFields[1]];
    }

    return (
      actualSchema.tests.findIndex(
        ({ name }: { name: string }) => name === "required"
      ) >= 0
    );
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    // defaultValues: {
    //   code: searchParams.get("code") || "",
    // },
  });

  console.log("errors", errors);

  const onSubmit = async (record: any) => {
    try {
      const body = {
        email: record?.email,
        title: record?.accountTitle,
        firstName: record?.firstName,
        lastName: record?.lastName,
      };
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: "5rem",
      }}
    >
      <Stack direction="column" spacing={2} textAlign="center">
        <Typography variant="h3">{t(`${config.config.titleText}`)}</Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack direction="column" spacing={2} textAlign="left" width={300}>
            {config.config.dataFields.map((item: any) => (
              <Grid item xs={12} sm={12} md={12}>
                <TextField
                  required={isFieldRequired(item.data, schema)}
                  size="small"
                  fullWidth
                  label={t(`${item.label}`)}
                  {...register(item.data)}
                />
                {errors[item.data] && (
                  <Typography color="error">
                    {t(`${item.requiredError}`)}
                  </Typography>
                )}
              </Grid>
            ))}
            <Button type="submit" variant="contained">
              {t(`${config.config.sendButtonLabel}`)}
            </Button>
          </Stack>
        </form>
      </Stack>
    </Box>
  );
}
