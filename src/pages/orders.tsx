import { GetServerSideProps } from 'next';
import axios from 'axios'
import {Button} from '@mui/material'

const OrdersPage = (props: any) => {
  console.log(props.orders)
  return (
    <div>
      Orders
    </div>
  );
};

export default OrdersPage

// Página gerada sempre que é acessada, mas gerada no servidor
export const getServerSideProps: GetServerSideProps = async(context) => {
  const { data } = await axios.get('http://localhost:3000/orders/', {
    headers: {
      'x-token': 'abjfvbedmo',
    }
  })
  console.log(data)
  return {
    props: {
      orders: data
    }
  }
}