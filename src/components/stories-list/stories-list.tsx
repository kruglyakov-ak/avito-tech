import { storyApi } from "../../services/story-service";

function StoriesList(): JSX.Element {
  const {
    data: stories,
  } = storyApi.useFetchAllStoriesQuery(0, {
    pollingInterval: 10000
  });

console.log(stories);
  return <div>Список статей</div>;
}

export default StoriesList;
