import React from 'react';
import { NotionRenderer } from 'react-notion';
import 'react-notion/src/styles.css';
import { useParams } from 'react-router';
import useSWR from 'swr';
import Header from '../components/header';
import fetcher from '../lib/fetcher';
import { getAPI } from '../lib/get-api';

export default function ActionItem({ ...props }) {
  let { id } = useParams();
  const { data, error } = useSWR(getAPI(`page/${id}`), fetcher);

  if (error) {
    return <p>{error}</p>;
  }

  if (!data) {
    return <>Loading...</>;
  }

  const canRender = Object.keys(data).length > 2;

  return (
    <>
      <Header />
      <div className="container mx-auto py-3 max-w-screen-md">
        <div className="py-3 mx-auto flex flex-col items-center justify-center">
          <div className="py-2">
            <a
              href="/"
              className="no-background py-2 px-4 rounded-md hover:bg-gray-200 text-gray-600"
            >
              Back
            </a>
          </div>
          {!canRender ? (
            <>
              <p className="text-xl">Nothing to show...</p>
              <br />
            </>
          ) : null}
          {canRender ? (
            <div className="bg-white p-6 rounded-md tracking-wide shadow-md">
              <p className="text-lg text-gray-600 font-bold text-center mb-3">
                Things to do or consider
              </p>
              <NotionRenderer blockMap={data} />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
