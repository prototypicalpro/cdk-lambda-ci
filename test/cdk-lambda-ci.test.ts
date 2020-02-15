import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import CdkLambdaCi = require('../lib/cdk-lambda-ci-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkLambdaCi.CdkLambdaCiStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
