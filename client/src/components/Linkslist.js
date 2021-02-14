import React from "react";
import { Link } from "react-router-dom";

export const Linkslist = ({ links }) => {
  if (!links.length) {
    return <p>Links are not</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>number</th>
          <th>Origin</th>
          <th>Short</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => (
          <tr key={link._id}>
            <td>{index + 1}</td>
            <td>{link.from}</td>
            <td>{link.to}</td>
            <td>
              <Link to={`/detail/${link._id}`}>Open</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
