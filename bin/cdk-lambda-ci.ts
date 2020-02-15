#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkLambdaCiStack } from '../lib/cdk-lambda-ci-stack';

const app = new cdk.App();
const stack = new CdkLambdaCiStack(app, 'CdkLambdaCiStack');
