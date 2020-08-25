import gql from "graphql-tag";

export const QUERY_LAUNCHES = gql`
  query Launches {
    launches {
      flight_number
      mission_name
      launch_success
      launch_date_local
    }
  }
`;
