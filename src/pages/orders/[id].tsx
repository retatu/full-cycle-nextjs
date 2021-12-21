import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import useSWR from 'swr'
import Router, { useRouter } from 'next/router';

const fetcher = (url: string) => {
  return axios.get(url).then(res => res.data)
}

const OrderShowPage = (props: any) => {
  
  const router = useRouter();
  const { id } = router.query;
  const { data, error } = useSWR(`http://localhost:3001/api/orders/${id}`, 
    fetcher,
    {
      onError: (error) => {
        if ([401,403].includes(error.response.status)){
          Router.push('/login')
        }
      }
    })

  return (
    data ? (<div style={{height: 400, width: '100%'}}>
      <Card>
        <CardHeader title='Order' subheader={data.id}/>
        <CardContent>
          <Typography>
            R$: {data.amount}
          </Typography>
        </CardContent>
      </Card>
    </div>) : null
  );
};

export default OrderShowPage

export const getStaticProps: GetStaticProps = async(context) => {
  return {
    props: {
    },
    revalidate: 20
  }
}

export const getStaticPaths: GetStaticPaths = async(context) => {
  return {
    paths: [], // dados que serão gerados no build
    fallback: 'blocking'
  }
}