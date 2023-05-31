import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  const skeletonCards = [];

  for (let i = 0; i < 12; i++) {
    skeletonCards.push(
      <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 my-3" key={i}>
        <SkeletonTheme baseColor="#322e80" highlightColor="#9994f7">
          <div className="card h-100">
            <Skeleton count={1} height={300} />
            <div className="card-body">
              <h5 className="card-title">
                <Skeleton count={1} />
              </h5>
              <p className="card-text">
                <Skeleton count={1} />
              </p>
              <p className="card-text">
                <Skeleton count={1} />
              </p>
              <p className="card-text">
                <Skeleton count={1} />
              </p>
            </div>
            <div className="card-footer">
              <div className="row">
                <div className="col">
                  <Skeleton count={1} height={30} />
                </div>
                <div className="col"></div>
                <div className="col">
                  <Skeleton count={1} height={30} />
                </div>
              </div>
            </div>
          </div>
        </SkeletonTheme>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col my-3">
          <div
            className="btn-toolbar justify-content-end"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <SkeletonTheme baseColor="#322e80" highlightColor="#9994f7">
              <div className="col">
                <Skeleton count={1} height={40} />
              </div>
            </SkeletonTheme>
          </div>
        </div>
      </div>
      <div className="row">{skeletonCards}</div>
    </div>
  );
}
