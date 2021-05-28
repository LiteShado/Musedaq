

const Home = (props) => {
    return(
        <div>
                <div className="homeContainer">
                    <h1>Musedaq</h1>
                    <h6>(the Nasdaq of Music)</h6>
                    <p>________________________</p>
                    <p>___________________</p>
                    <p>_____________</p>
                    <h4>making independent artists' dreams come true.</h4>
                </div>
                <marquee class="ticker">
                    <div class="ticker">
                    <div class="ticker__item">INVB | Hip Hop</div>
                    <div class="ticker__item percent">^2.1%</div>
                    <div class="ticker__item">TARA | Pop </div>
                    <div class="ticker__item percent">^5.7%</div>
                    <div class="ticker__item">PP | RnB </div>
                    <div class="ticker__item percentdown">`1.7%</div>
                    <div class="ticker__item">SS | Pop </div>
                    <div class="ticker__item percenthigh">^8.9%</div>
                    <div class="ticker__item">XZ | Pop </div>
                    <div class="ticker__item percent">^4.7%</div>
                    <div class="ticker__item">RBOI | Rap </div>
                    <div class="ticker__item percentdown">`3.7%</div>
                    <div class="ticker__item">ISHN | RnB </div>
                    <div class="ticker__item percenthigh">^7.7%</div>
                    </div>
                </marquee>
        </div>
    )
}



export default Home
