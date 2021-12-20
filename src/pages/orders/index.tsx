import { GetServerSideProps } from 'next';
import axios from 'axios'
import { Typography, Link as MuiLink } from '@mui/material'
import { GridColumns, DataGrid } from '@mui/x-data-grid'
import Link from 'next/link';
import { OrderStatus, OrderStatusTranslating } from '../utils/models';

const OrdersPage = (props: any) => {
  const columns: GridColumns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 300,
      renderCell: (params) => {
        return <Link href={`/orders/${params.value}`} passHref>
          <MuiLink>{params.value}</MuiLink>
        </Link>
      }
    },
    {
      field: 'amount',
      headerName: 'Valor',
      width: 100,
    },
    {
      field: 'credit_card_number',
      headerName: 'Número do Cartão de Crédito',
      width: 200,
    },
    {
      field: 'credit_card_name',
      headerName: 'Nome do Cartão de Crédito',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      valueFormatter: (params) =>  OrderStatusTranslating[params.value as OrderStatus]
    },
  ]
  return (
    <div style={{height: 400, width: '100%'}}>
      <Typography component='h1' variant='h4'>Minhas Ordens</Typography>
      <DataGrid columns={columns} rows={props.orders} />

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
  return {
    props: {
      orders: data
    }
  }
}