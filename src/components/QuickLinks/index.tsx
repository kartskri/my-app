import {Row} from "react-bootstrap";
import React from "react";

const QuickLinks: React.FC = () => {
    return (
        <>
            <h3 className="my-2">Quick Links</h3>
            <Row>
                <div className="col-6 border-1 border-bottom border-end py-2"><a
                    className="btn btn-link ps-2 fs-0 text-800 hover-primary fw-semi-bold text-decoration-none d-flex flex-column d-xxl-inline-block"
                    href="feed.html#!"><span className="fa-solid fa-user-group me-2 mb-2 mb-xxl-0"></span>Followers</a>
                </div>
                <div className="col-6 border-1 border-bottom py-2"><a
                    className="btn btn-link fs-0 text-800 hover-primary fw-semi-bold text-decoration-none d-flex flex-column d-xxl-inline-block"
                    href="feed.html#!"><span className="fa-solid fa-users me-2 mb-2 mb-xxl-0"></span>Communities</a>
                </div>
                <div className="col-6 border-1 border-bottom border-end py-2"><a
                    className="btn btn-link ps-2 fs-0 text-800 hover-primary fw-semi-bold text-decoration-none d-flex flex-column d-xxl-inline-block"
                    href="feed.html#!"><span className="fa-solid fa-photo-film me-2 mb-2 mb-xxl-0"></span>Media
                    Files</a></div>
                <div className="col-6 border-1 border-bottom py-2"><a
                    className="btn btn-link fs-0 text-800 hover-primary fw-semi-bold text-decoration-none d-flex flex-column d-xxl-inline-block"
                    href="feed.html#!"><span className="fa-solid fa-calendar-days me-2 mb-2 mb-xxl-0"></span>Events</a>
                </div>
                <div className="col-6 border-1 border-end py-2"><a
                    className="btn btn-link ps-2 fs-0 text-800 hover-primary fw-semi-bold text-decoration-none d-flex flex-column d-xxl-inline-block"
                    href="feed.html#!"><span className="fa-solid fa-dice me-2 mb-2 mb-xxl-0"></span>Games</a></div>
                <div className="col-6 border-1 py-2"><a
                    className="btn btn-link fs-0 text-800 hover-primary fw-semi-bold text-decoration-none d-flex flex-column d-xxl-inline-block"
                    href="feed.html#!"><span className="fa-solid fa-user-gear me-2 mb-2 mb-xxl-0"></span>Settings </a>
                </div>
            </Row>
        </>
    );
}
export default QuickLinks;
