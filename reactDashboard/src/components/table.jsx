import React from 'react';
import InputBar from './inputBar'
import TableBody from './tableBody'
import SearchBar from './searchBar'
import '../App.css';

function table() {
    return (
        <div class="col-10 p-5">
            <SearchBar />
            <InputBar />
            <div class="row px-2">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="selector">
                                <input class="form-check-input" type="checkbox" value="" id=""></input>
                            </th>
                            <th scope="col">Invoive ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Payable Amount</th>
                            <th scope="col">Paid Amount</th>
                            <th scope="col">Due</th>
                        </tr>
                    </thead>
                    <TableBody />
                </table>
            </div>
        </div>)
}

export default table;