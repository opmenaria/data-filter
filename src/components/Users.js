import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Users() {
    const [tableData, setTableData] = useState([]);
    const [updatedData, setUpdatedData] = useState({});
    const [isEditing, setIsEditing] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTableData(response.data);
        } catch (error) {
            console.log('Failed to fetch data');
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // Perform search logic here
    };

    const handleEdit = (id) => {
        if (isEditing === id) {
            handleUpdate(id);
            setIsEditing(null);
        } else {
            if (isEditing !== null) {
                handleUpdate(isEditing);
            }
            setIsEditing(id);
        }
    };

    const handleUpdate = (id) => {
        const updatedTableData = tableData.map((el) => {
            if (el.id === id) {
                return {
                    ...el,
                    ...updatedData,
                };
            }
            return el;
        });

        setTableData(updatedTableData);
        setUpdatedData({});
    };

    const handleOnDelete = async (id) => {
        const updatedData = tableData.filter((item) => item.id !== id);
        setTableData(updatedData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='relative flex '>
                <h2 className="text-blue-700 text-2xl mx-auto my-3 font-bold" style={{ textShadow: '1.5px 1.5px 2px black' }}>
                    Data Filter App
                </h2>
                <div className="absolute right-32 mx-auto w-64">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full px-4 py-2 rounded-md shadow-md focus:outline-none ring-1 ring-gray-400 focus:ring-2 focus:ring-blue-500"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>
            <table className="table w-5/6 mx-auto overflow-hidden rounded-md shadow-xl">
                <thead className="text-left thead-dark bg-gray-800 text-white">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col"></th>
                    </tr>
                </thead>

                <tbody className="bg-gray-300  border-2 border-gray-500">
                    {tableData.map((el) => (
                        <tr className='space-y-3' key={el.id}>
                            <td>{el.id}</td>
                            <td>
                                {isEditing === el.id ? (
                                    <input
                                        type="text"
                                        value={updatedData.name || el.name}
                                        onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
                                        autoFocus
                                    />
                                ) : (
                                    el.name
                                )}
                            </td>
                            <td>
                                {isEditing === el.id ? (
                                    <input
                                        type="text"
                                        value={updatedData.username || el.username}
                                        onChange={(e) => setUpdatedData({ ...updatedData, username: e.target.value })}
                                    />
                                ) : (
                                    el.username
                                )}
                            </td>
                            <td>
                                {isEditing === el.id ? (
                                    <input
                                        type="text"
                                        value={updatedData.phone || el.phone}
                                        onChange={(e) => setUpdatedData({ ...updatedData, phone: e.target.value })}
                                    />
                                ) : (
                                    el.phone
                                )}
                            </td>
                            <td>
                                {isEditing === el.id ? (
                                    <input
                                        type="text"
                                        value={updatedData.email || el.email}
                                        onChange={(e) => setUpdatedData({ ...updatedData, email: e.target.value })}
                                    />
                                ) : (
                                    el.email
                                )}
                            </td>
                            <td className="flex justify-between">
                                <button
                                    className={`${isEditing === el.id ? "bg-yellow-300 border border-gray-600 w-20 font-semibold" : "bg-yellow-300 w-20 font-semibold"}`}
                                    onClick={() => handleEdit(el.id)}
                                    disabled={isEditing !== null && isEditing !== el.id}
                                >
                                    {isEditing === el.id ? 'Save' : 'Edit'}
                                </button>
                                <button className="bg-red-500 w-20 font-semibold" onClick={() => handleOnDelete(el.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
