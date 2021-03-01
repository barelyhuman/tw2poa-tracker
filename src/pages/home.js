import React from 'react';
import toast from 'react-hot-toast';
import { getAPI } from '../lib/get-api';
import fetcher from '../lib/fetcher';
import { TABLEID } from '../constants/table';
import useSWR from 'swr';
import { useHistory } from 'react-router';

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
      <div className="container mx-auto py-3 max-w-screen-md">
        <header>
          <p className="text-4xl text-gray-600 text-center">
            TillWhen Mark 2 - Plan of Action
          </p>
        </header>
        <ul className="mt-32">
          {data.map((item) => (
            <React.Fragment key={`id-${item.id}`}>
              <li onClick={() => navigateTo(item.id)}>
                <div className="mt-3 text-gray-600 bg-white px-4 p-2 rounded-md tracking-wide cursor-pointer hover:bg-gray-100">
                  <p className="flex items-center cursor-pointer">
                    <span className="bg-green-100 mr-3 rounded-full text-green-600">
                      {item.Marked ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5858 13.4142L7.75735 10.5858L6.34314 12L10.5858 16.2427L17.6568 9.1716L16.2426 7.75739L10.5858 13.4142Z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : null}
                    </span>

                    <span className={`${item.Marked ? 'line-through' : ''} `}>
                      {item.Task}
                    </span>
                  </p>
                </div>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </>
  );
}
