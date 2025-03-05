import {Stack, StackProps} from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export class HealthcheckerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const bucket = new Bucket(this, 'Bucket')
  }
}

/*
export class HealthcheckerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'HealthcheckerQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
*/
