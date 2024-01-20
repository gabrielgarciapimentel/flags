import axios from "axios";

const OPTIONS: Record<Connections, string> = {
  ibge: 'https://servicodados.ibge.gov.br/api/v1/'
};

const moduleOptions = (connection: Connections) => {
  return OPTIONS[connection];
};

export const axiosInstance = ({ connection }: {connection: Connections}) =>
  axios.create({
    baseURL: moduleOptions(connection),
  });