import React from 'react'

const UserDeaatila = (props) => {
    const styles = {
        image: {
            width: '200px'
        }
    }
    return (
        <div className="col-md-12">
            <h2>Card Image</h2>
            <p>Image at the top (card-img-top):</p>
            <div class="card" >
                <img class="card-img-top" style={styles.image} src="https://www.w3schools.com/howto/img_avatar.png" alt="Card image" />
                <div class="card-body">
                    <h4 class="card-title">{props.selectedUserDeaila.customer_name}</h4>
                    <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                   
                </div>
            </div>
            <br />



        </div>
    )
}
export default UserDeaatila;