import React from 'react';

export default function ListItem({ marked, task, id, onPress }) {
  return (
    <React.Fragment key={`id-${id}`}>
      <li onClick={() => onPress && onPress(id)}>
        <div className="mt-3 text-gray-600 bg-white px-4 p-2 rounded-md tracking-wide cursor-pointer hover:bg-gray-100">
          <p className="flex items-center cursor-pointer">
            <span className="bg-green-100 mr-3 rounded-full text-green-600">
              {marked ? (
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

            <span className={`${marked ? 'line-through' : ''} `}>{task}</span>
          </p>
        </div>
      </li>
    </React.Fragment>
  );
}
