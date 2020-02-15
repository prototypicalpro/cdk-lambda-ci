import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export interface LambdaWithAliasStackProps extends cdk.StackProps {
  asset_path: string;
  handler: string;
  props?: lambda.FunctionProps;
}

export default class LambdaWithAliasStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: LambdaWithAliasStackProps) {
    super(scope, id, props);
    // The code that defines your stack goes here
  }
}
