import React from 'react';
import './Now.scss';

const Now = () => (
  <div className="now-page">
    <h1>what I'm doing now?</h1>
    <div>
      <h2>daily work</h2>
      <div>
        I'm currently working at{' '}
        <a href="https://www.spidertracks.com/">Spidertracks</a> on a solution
        that helps make the aviation community safer place to live and operate
        in.
        <br />
        <br />
        This is a summary of my daily tasks alongside some used tech:
        <ul>
          <li>
            develop front-end using <a href="https://reactjs.org/">ReactJS</a>{' '}
            and <a href="https://redux.js.org/">Redux</a>
          </li>
          <li>
            develop backend using <a href="https://nodejs.org/en/">NodeJS</a>.
            New features backends are being developed as microservices, and rely
            on <a href="https://aws.amazon.com/lambda/">AWS lambda</a> and{' '}
            <a href="https://aws.amazon.com/api-gateway/">API Gateway</a> for
            developing our REST APIs
          </li>
          <li>
            integrate with data stream utilising{' '}
            <a href="https://aws.amazon.com/kinesis/">Amazon kinesis</a>
          </li>
          <li>
            build CI/CD pipelines using{' '}
            <a href="https://concourse-ci.org/">concourse</a>
          </li>
          <li>
            develop unit tests using Jest(and Enzyme when working on the
            front-end)
          </li>
          <li>
            develop end to end tests using{' '}
            <a href="https://devexpress.github.io/testcafe/">testcafe</a>
          </li>
          <li>
            plan, refine, brainstorm and architect new solution for new
            requirements
          </li>
        </ul>
      </div>
      <h2>learnings, teachings & side projects </h2>
      <h3>mock & testability workshop</h3>
      I've been working on a mini training about mocks and testability with the{' '}
      <a href="https://www.ministryoftesting.com/">ministry of testing</a>. I've
      done the first instance of this workshop on Sep 11, 2020. A few more
      repetitions of the workshop (with some enhancements) are coming soon. More
      details at:
      https://www.ministryoftesting.com/training/courses/mocks-and-testability
      <h3>AWS training</h3>
      Started getting involved with AWS services a couple of months ago, and
      thought to test my knowledge through some certificates. Successfully
      achieved the "AWS Certified Cloud Practitioner" and now following through
      online courses and documentation towards the "AWS Certified Solutions
      Architect – Associate"
      <h3>more interest in data?</h3>
      I've been having more interest about data science, and that's something I
      might be looking at doing in the long term. Started looking into
      refreshing my SQL knowledge as a first step. This is happening in a very
      casual manner, keeping the current focus on AWS learnings.
      <h3>blog posts</h3>
      It is enjoyable to document the learnings and share them with the
      community. This would also enhance my understanding of the topic I'm
      blogging about. My last blog post was about{' '}
      <a href="https://medium.com/swlh/host-a-static-website-on-s3-using-aws-cdk-b9151213aad4">
        hosting a static website on S3 using AWS CDK
      </a>
      .
      <br />
      <br />A couple of blog posts I want to write in the near future target
      "Routing in a react app", and "baking quality in the software process" -
      keep tuned if you're interested.
      <h3>other</h3>
      Lately, I've been helping the menadevs community upgrade their chatbot
      "bosta" to use the new slack events api -
      https://github.com/mena-devs/bosta
      <br />
      <br />
      Another idea I've been obsessing about lately is teaching programming (or
      tech skills) for older people. This could be a volunteering oportunity.
      Looking forward to put this into action soon. Please get in touch if you
      have some ideas to help in the execution.
      <h4>Last updated: 28 Sep 2020</h4>
    </div>
  </div>
);

export default Now;
