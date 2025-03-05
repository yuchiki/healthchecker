import { Stack, StackProps } from 'aws-cdk-lib'
import { Construct } from 'constructs'

export class HealthcheckerStack extends Stack {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)
  }
}
