
import React from "react";

const ResumePreview = ({ data }) => {
  return (
    <div
      id="resume-preview"
      className="p-6 border rounded-lg shadow-lg bg-white text-black space-y-4"
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p>{data.email} | {data.phone}</p>
      </div>
      <hr />
      <section>
        <h3 className="text-xl font-semibold">Education</h3>
        <p>{data.education}</p>
      </section>
      <section>
        <h3 className="text-xl font-semibold">Experience</h3>
        <p>{data.experience}</p>
      </section>
      <section>
        <h3 className="text-xl font-semibold">Skills</h3>
        <p>{data.skills}</p>
      </section>
    </div>
  );
};

export default ResumePreview;
