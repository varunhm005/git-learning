import React from 'react';

function SearchBar() {
    return (<div class="row mb-5">
        <div className="col-md-11">
            <div class="input-group  w-75">
                <div class="input-group-prepend">
                    <span class="input-group-text searchIcon" id="inputGroupPrepend3"><i class='bx bx-search'></i></span>
                </div>
                <input type="text" class="form-control inputForm" placeholder="Username" ></input>
            </div>
        </div>
        <div className="col-md-1 bg-white bellCol" >
            <i class='bx bx-bell mt-3'></i>
            <span class="badge" > </span>
        </div>
    </div>)
}

export default SearchBar;