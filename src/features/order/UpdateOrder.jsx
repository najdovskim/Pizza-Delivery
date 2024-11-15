import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

//re-validation, react router knows that the data has changed as a result of this action. so it will fetch the
//data in the background then re-render the page with the new data

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>;
    </fetcher.Form>
  );
}

export default UpdateOrder;

//re-validation, react router knows that the data has changed as a result of this action. so it will fetch the
//data in the background then re-render the page with the new data
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
