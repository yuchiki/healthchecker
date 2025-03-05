import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as constructs from 'constructs';

export class StatusStorage extends constructs.Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: constructs.Construct, id: string) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'StatusStorage', {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
