import './About.css';

function About(){
    return(
        <>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">About Our Pizza Store</h1>
                        <p className="lead">Founded in 1995, our pizza store began as a small family-owned business
                                        with a passion for authentic Italian pizza. Over the years, we've grown
                                        into a beloved community staple, known for our fresh ingredients and 
                                        traditional recipes passed down through generations.</p>
                    </div>
                </div>
            </div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our Values</h1>
                        <p className="lead">We believe in quality, community, and sustainability. Our pizzas are made
                                        with locally sourced ingredients whenever possible, and we strive to minimize
                                        our environmental impact through eco-friendly practices. Our team is dedicated
                                        to creating a welcoming atmosphere where everyone feels like family.</p>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="https://images.pexels.com/photos/845797/pexels-photo-845797.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Special Features</h1>
                        <p className="lead">What sets us apart? It's our commitment to innovation and taste. We offer a unique
                                        selection of gourmet pizzas, including vegan and gluten-free options, all crafted with
                                        the same care and attention to detail. Our wood-fired oven gives each pizza a distinctive
                                        flavor that you won’t find anywhere else.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;