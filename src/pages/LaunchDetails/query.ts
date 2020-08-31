import gql from "graphql-tag";

export const QUERY_LAUNCH_DETAIL = gql`
  query LaunchDetail($id: String!) {
    launch(id: $id) {
      flight_number
      mission_name
      launch_date_local
      launch_success
      details
      launch_site {
        site_name
      }
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
      links {
        flickr_images
      }
    }
  }
`;
