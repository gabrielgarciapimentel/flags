/// <reference types="vite-plugin-svgr/client" />
// import { useMemo } from "react"
import { BrazilIcon } from "./content/BrazilIcon"
import { LeftIcon } from "./content/LeftIcon"
import { UseSvgrsProps } from "./types"
import { UsaIcon } from "./content/UsaIcon"
import AMIcon from "../../assets/amazonas.icon.svg?react";
import APIcon from "../../assets/amapa-icon.svg?react";
import ACIcon from "../../assets/acre-icon.svg?react";
import ALIcon from "../../assets/alagoas-icon.svg?react";
import BAIcon from "../../assets/bahia-icon.svg?react";
import CEIcon from "../../assets/ceara-icon.svg?react";
import DFIcon from "../../assets/distrito-federal-icon.svg?react";
import ESIcon from "../../assets/espirito-santo-icon.svg?react";
import GOIcon from "../../assets/goias-icon.svg?react";
import MAIcon from "../../assets/maranhao-icon.svg?react";
import MGIcon from "../../assets/minas-gerais-icon.svg?react";
import MSIcon from "../../assets/mato-grosso-sul-icon.svg?react";
import MTIcon from "../../assets/mato-grosso.svg?react";
import PAIcon from "../../assets/para-icon.svg?react";
import PBIcon from "../../assets/paraiba-icon.svg?react";
import PEIcon from "../../assets/pernambuco-icon.svg?react";
import PIIcon from "../../assets/piaui-icon.svg?react";
import PRIcon from "../../assets/parana-icon.svg?react";
import RJIcon from "../../assets/rio-janeiro-icon.svg?react";
import RNIcon from "../../assets/rio-grande-norte-icon.svg?react";
import ROIcon from "../../assets/rondonia-icon.svg?react";
import RRIcon from "../../assets/roraima-icon.svg?react";
import RSIcon from "../../assets/rio-grande-sul-icon.svg?react";
import SCIcon from "../../assets/santa-catarina-icon.svg?react";
import SEIcon from "../../assets/sergipe-icon.svg?react";
import SPIcon from "../../assets/sao-paulo-icon.svg?react";
import TOIcon from "../../assets/tocantins-icon.svg?react";

const options: Record<Svgs, React.FunctionComponent<React.SVGProps<SVGSVGElement> & {
  title?: string | undefined;
}> | React.MemoExoticComponent<(props: React.SVGProps<SVGSVGElement>) => JSX.Element>> = {
  "bra-icon": BrazilIcon,
  "left-icon": LeftIcon,
  "usa-icon": UsaIcon,
  AC: ACIcon,
  AL: ALIcon,
  AM: AMIcon,
  AP: APIcon,
  BA: BAIcon,
  CE: CEIcon,
  DF: DFIcon,
  ES: ESIcon,
  GO: GOIcon,
  MA: MAIcon,
  MG: MGIcon,
  MS: MSIcon,
  MT: MTIcon,
  PA: PAIcon,
  PB: PBIcon,
  PE: PEIcon,
  PI: PIIcon,
  PR: PRIcon,
  RJ: RJIcon,
  RN: RNIcon,
  RO: ROIcon,
  RR: RRIcon,
  RS: RSIcon,
  SC: SCIcon,
  SE: SEIcon,
  SP: SPIcon,
  TO: TOIcon
}

export const useSvgrs = ({name}: UseSvgrsProps) => {

  return {Component: options[name]}
}