import { BigInt } from "@graphprotocol/graph-ts"
import {
  BladeRegistry,
  AppNameRegisteredEvent,
  AppRegisteredEvent,
  AppSetOwnerEvent,
  AppVersionRegisteredEvent,
  AppVersionURLSetEvent,
  IdDelegateRegisteredEvent,
  IdDelegateRevokedEvent,
  IdNameRegisteredEvent,
  IdURLSetEvent,
  IdentityCreatedEvent,
  OrgCreatedEvent,
  OrgMemberAddedEvent,
  OrgMemberRemovedEvent,
  OrgNameRegisteredEvent,
  OrgOwnerChangedEvent,
  OrgURLSetEvent
} from "../generated/BladeRegistry/BladeRegistry"
import { App } from "../generated/schema"

export function handleAppNameRegisteredEvent(
  event: AppNameRegisteredEvent
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = App.load(event.params.appID.toString());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new App(event.params.appID.toString())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.appID = event.params.appID
  entity.appName = event.params.appName

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.changeOrgOwner(...)
  // - contract.createApp(...)
  // - contract.createAppVersion(...)
  // - contract.createIdentity(...)
  // - contract.createOrganization(...)
  // - contract.getAppForVersion(...)
  // - contract.getAppID(...)
  // - contract.getAppOwner(...)
  // - contract.getAppOwnerByName(...)
  // - contract.getDelegate(...)
  // - contract.getIdentity(...)
  // - contract.getIdentityName(...)
  // - contract.getIdentityURL(...)
  // - contract.getOrgID(...)
  // - contract.getOrgName(...)
  // - contract.getOrgOwner(...)
  // - contract.getOrgURL(...)
  // - contract.isNameRegistered(...)
  // - contract.isOrgMember(...)
  // - contract.isRevokedDelegateForID(...)
  // - contract.registerName(...)
  // - contract.setAppOwner(...)
  // - contract.setDelegate(...)
  // - contract.setURL(...)
  // - contract.setVersionURL(...)
}

export function handleAppRegisteredEvent(event: AppRegisteredEvent): void {
  let entity = App.load(event.params.appID.toString());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new App(event.params.appID.toString())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.appID = event.params.appID

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleAppSetOwnerEvent(event: AppSetOwnerEvent): void {
  let entity = App.load(event.params.appID.toString());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new App(event.params.appID.toString())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.appID = event.params.appID
  entity.appOwnerID = event.params.appOwnerID

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleAppVersionRegisteredEvent(
  event: AppVersionRegisteredEvent
): void {
  let entity = App.load(event.params.appID.toString());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new App(event.params.appID.toString())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.appID = event.params.appID
  entity.appVersionID = event.params.appVersionID

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleAppVersionURLSetEvent(
  event: AppVersionURLSetEvent
): void {
  let entity = App.load(event.params.appID.toString());

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new App(event.params.appID.toString())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.appID = event.params.appID
  entity.appURL = event.params.appURL

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleIdDelegateRegisteredEvent(
  event: IdDelegateRegisteredEvent
): void { }

export function handleIdDelegateRevokedEvent(
  event: IdDelegateRevokedEvent
): void { }

export function handleIdNameRegisteredEvent(
  event: IdNameRegisteredEvent
): void { }

export function handleIdURLSetEvent(event: IdURLSetEvent): void { }

export function handleIdentityCreatedEvent(event: IdentityCreatedEvent): void { }

export function handleOrgCreatedEvent(event: OrgCreatedEvent): void { }

export function handleOrgMemberAddedEvent(event: OrgMemberAddedEvent): void { }

export function handleOrgMemberRemovedEvent(
  event: OrgMemberRemovedEvent
): void { }

export function handleOrgNameRegisteredEvent(
  event: OrgNameRegisteredEvent
): void { }

export function handleOrgOwnerChangedEvent(event: OrgOwnerChangedEvent): void { }

export function handleOrgURLSetEvent(event: OrgURLSetEvent): void { }
