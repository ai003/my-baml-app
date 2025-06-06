/*************************************************************************************************

Welcome to Baml! To use this generated code, please run one of the following:

$ npm install @boundaryml/baml
$ yarn add @boundaryml/baml
$ pnpm add @boundaryml/baml

*************************************************************************************************/

// This file was generated by BAML: do not edit it. Instead, edit the BAML
// files and re-generate this code.
//
/* eslint-disable */
// tslint:disable
// @ts-nocheck
// biome-ignore format: autogenerated code
import type { BamlRuntime, BamlCtxManager, ClientRegistry, Image, Audio, Collector } from "@boundaryml/baml"
import { toBamlError } from "@boundaryml/baml"
import type { Checked, Check } from "./types"
import type { partial_types } from "./partial_types"
import type * as types from "./types"
import type {Message, Resume, Story} from "./types"
import type TypeBuilder from "./type_builder"

export class LlmResponseParser {
  constructor(private runtime: BamlRuntime, private ctxManager: BamlCtxManager) {}

  
  Chat(
      llmResponse: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): string {
    try {
      return this.runtime.parseLlmResponse(
        "Chat",
        llmResponse,
        false,
        this.ctxManager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      ) as string
    } catch (error) {
      throw toBamlError(error);
    }
  }
  
  ExtractResume(
      llmResponse: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Resume {
    try {
      return this.runtime.parseLlmResponse(
        "ExtractResume",
        llmResponse,
        false,
        this.ctxManager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      ) as Resume
    } catch (error) {
      throw toBamlError(error);
    }
  }
  
  WriteMeAStory(
      llmResponse: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): Story {
    try {
      return this.runtime.parseLlmResponse(
        "WriteMeAStory",
        llmResponse,
        false,
        this.ctxManager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      ) as Story
    } catch (error) {
      throw toBamlError(error);
    }
  }
  
}

export class LlmStreamParser {
  constructor(private runtime: BamlRuntime, private ctxManager: BamlCtxManager) {}

  
  Chat(
      llmResponse: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): string {
    try {
      return this.runtime.parseLlmResponse(
        "Chat",
        llmResponse,
        true,
        this.ctxManager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      ) as string
    } catch (error) {
      throw toBamlError(error);
    }
  }
  
  ExtractResume(
      llmResponse: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): partial_types.Resume {
    try {
      return this.runtime.parseLlmResponse(
        "ExtractResume",
        llmResponse,
        true,
        this.ctxManager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      ) as partial_types.Resume
    } catch (error) {
      throw toBamlError(error);
    }
  }
  
  WriteMeAStory(
      llmResponse: string,
      __baml_options__?: { tb?: TypeBuilder, clientRegistry?: ClientRegistry }
  ): partial_types.Story {
    try {
      return this.runtime.parseLlmResponse(
        "WriteMeAStory",
        llmResponse,
        true,
        this.ctxManager.cloneContext(),
        __baml_options__?.tb?.__tb(),
        __baml_options__?.clientRegistry,
      ) as partial_types.Story
    } catch (error) {
      throw toBamlError(error);
    }
  }
  
}