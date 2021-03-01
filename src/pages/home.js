import React from 'react';
import toast from 'react-hot-toast';
import { getAPI } from '../lib/get-api';
import fetcher from '../lib/fetcher';
import { TABLEID } from '../constants/table';
import useSWR from 'swr';
import { useHistory } from 'react-router';
import ListItem from '../components/list-item';
import Header from '../components/header';

export default function Home({ ...props }) {
  let history = useHistory();
  const { data, error } = useSWR(getAPI(`table/${TABLEID}`), fetcher);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <>Loading...</>;
  }

  const navigateTo = (id) => {
    history.push(`/${id}`);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto py-3 max-w-screen-md">
        <ul className="mt-14">
          {data.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              marked={item.Marked}
              task={item.Task}
              onPress={(id) => navigateTo(id)}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
