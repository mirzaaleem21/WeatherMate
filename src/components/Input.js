import React from 'react'

export default function Input({getData}) {
    return (
        <div>
              <form id="search-form" onSubmit={getData}>
            <input type="search"
            placeholder="city"
            id="search-input"
            required
            autocomplete="off"
            name="city"
            />
            <br>
        </br>
        <button id="search-button"  >Search</button>

        </form>
        </div>
    )
}
