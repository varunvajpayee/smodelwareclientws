Ext.define('smartcfaclienttouch.store.Demos1', {
    alias: 'store.Demos1',
    extend: 'Ext.data.TreeStore',
    requires: ['smartcfaclienttouch.model.Demo'],

    config: {
        storeId: 'Demos',
        model: 'smartcfaclienttouch.model.Demo',
        defaultRootProperty: 'items',
        root: {
            "id": "CFA_LEVEL_3",
            "text": "CFA LEVEL 3",
            "leaf": false,
            "view": "RevealLeft",
            "items": [
                {
                    "id": "CFA_B_1",
                    "text": "Ethical and Professional Standards",
                    "leaf": false,
                    "view": "RevealLeft",
                    "items": [
                        {
                            "id": "CFA_B_1_SS_1",
                            "text": "Study Session 1",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_1_SS_1_R_1",
                                    "text": "Reading 1. Code of Ethics and Standards of Professional Conduct Standards of Practice Handbook Eleventh Edition ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_1_SS_1_R_1_L_a",
                                            "text": "a. describe the structure of the CFA Institute Professional Conduct Program and the disciplinary review process for the enforcement of the Code of Ethics and Standards of Professional Conduct",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_1_SS_1_R_1_L_b",
                                            "text": "b explain the ethical responsibilities required by the Code of Ethics and the Standards of Professional Conduct including the sub- sections of each standard.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_1_SS_1_R_2",
                                    "text": "Reading 2. Guidance for Standards I–VII Standards of Practice Handbook Eleventh Edition",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_1_SS_1_R_2_L_a",
                                            "text": "a demonstrate a thorough knowledge of the Code of Ethics and Standards of Professional Conduct by interpreting the Code and Standards in various situations involving issues of professional integrity; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_1_SS_1_R_2_L_b",
                                            "text": "b recommend practices and procedures designed to prevent violations of the Code of Ethics and Standards of Professional Conduct.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_1_SS_2",
                            "text": "Study Session 2",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_1_SS_2_R_3",
                                    "text": "READING 3. APPLICATION OF THE CODE AND STANDARDS",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_1_SS_2_R_3_L_a",
                                            "text": "a evaluate professional conduct and formulate an appropriate response to actions that violate the Code of Ethics and Standards of Professional Conduct; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_1_SS_2_R_3_L_b",
                                            "text": "b formulate appropriate policy and procedural changes needed to assure compliance with the Code of Ethics and Standards of Professional Conduct.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_1_SS_2_R_4",
                                    "text": "READING 4. ASSET MANAGER CODE OF PROFESSIONAL CONDUCT ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_1_SS_2_R_4_L_a",
                                            "text": "a explain the purpose of the Asset Manager Code and the benefits that may accrue to a firm that adopts the Code;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_1_SS_2_R_4_L_b",
                                            "text": "b explain the ethical and professional responsibilities required by the six General Principles of Conduct of the Asset Manager Code;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_1_SS_2_R_4_L_c",
                                            "text": "c determine whether an asset manager’s practices and procedures are consistent with the Asset Manager Code;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_1_SS_2_R_4_L_d",
                                            "text": "d recommend practices and procedures designed to prevent violations of the Asset Manager Code.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        }
                    ],
                    "kind": "BOOK"
                },
                {
                    "id": "CFA_B_2",
                    "text": "Behavioral Finance Individual Investors and Institutional Investors",
                    "leaf": false,
                    "view": "RevealLeft",
                    "items": [
                        {
                            "id": "CFA_B_2_SS_3",
                            "text": "Study Session 3",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_2_SS_3_R_5",
                                    "text": "READING 5. THE BEHAVIORAL FINANCE PERSPECTIVE",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_3_R_5_L_a",
                                            "text": "a contrast traditional and behavioral finance perspectives on investor decision making; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_5_L_b",
                                            "text": "b contrast expected utility and prospect theories of investment decision making;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_5_L_c",
                                            "text": "c discuss the effect that cognitive limitations and bounded rationality may have on investment decision making; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_5_L_d",
                                            "text": "d compare traditional and behavioral finance perspectives on portfolio construction and the behavior of capital markets.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_2_SS_3_R_6",
                                    "text": "READING 6. THE BEHAVIORAL BIASES OF INDIVIDUALS",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_3_R_6_L_a",
                                            "text": "a distinguish between cognitive errors and emotional biases; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_6_L_b",
                                            "text": "b discuss commonly recognized behavioral biases and their implications for financial decision making; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_6_L_c",
                                            "text": "c identify and evaluate an individual’s behavioral biases; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_6_L_d",
                                            "text": "d evaluate how behavioral biases affect investment policy and asset allocation decisions and recommend approaches to mitigate their effects.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_2_SS_3_R_7",
                                    "text": "READING 7. BEHAVIORAL FINANCE AND INVESTMENT PROCESSES",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_3_R_7_L_a",
                                            "text": "a explain the uses and limitations of classifying investors into personality types;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_7_L_b",
                                            "text": "b discuss how behavioral factors affect adviser–client interactions; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_7_L_c",
                                            "text": "c discuss how behavioral factors influence portfolio construction; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_7_L_d",
                                            "text": "d explain how behavioral finance can be applied to the process of portfolio construction; ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_7_L_e",
                                            "text": "e discuss how behavioral factors affect analyst forecasts and recommend remedial actions for analyst biases;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_7_L_f",
                                            "text": "f discuss how behavioral factors affect investment committee decision making and recommend techniques for mitigating their effects;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_3_R_7_L_g",
                                            "text": "g describe how behavioral biases of investors can lead to market characteristics that may not be explained by traditional finance. ",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_2_SS_4",
                            "text": "Study Session 4",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_2_SS_4_R_10",
                                    "text": "READING 10. ESTATE PLANNING IN A GLOBAL CONTEXT The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_a",
                                            "text": "a discuss the purpose of estate planning and explain the basic concepts of domestic estate planning including estates wills and probate;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_b",
                                            "text": "b explain the two principal forms of wealth transfer taxes and discuss effects of important non- tax issues such as legal system forced heirship and marital property regime;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_c",
                                            "text": "c determine a family’s core capital and excess capital based on mortality probabilities and Monte Carlo analysis;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_d",
                                            "text": "d evaluate the relative after- tax value of lifetime gifts and testamentary bequests;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_e",
                                            "text": "e explain the estate planning benefit of making lifetime gifts when gift taxes are paid by the donor rather than the recipient;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_f",
                                            "text": "f evaluate the after- tax benefits of basic estate planning strategies including generation skipping spousal exemptions valuation discounts and charitable gifts;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_g",
                                            "text": "g explain the basic structure of a trust and discuss the differences between revocable and irrevocable trusts;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_h",
                                            "text": "h explain how life insurance can be a tax- efficient means of wealth transfer;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_i",
                                            "text": "i discuss the two principal systems (source jurisdiction and residence jurisdiction) for establishing a country’s tax jurisdiction;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_j",
                                            "text": "j discuss the possible income and estate tax consequences of foreign situated assets and foreign- sourced income;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_k",
                                            "text": "k evaluate a client’s tax liability under each of three basic methods (credit exemption and deduction) that a country may use to provide relief from double taxation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_10_L_l",
                                            "text": "l discuss how increasing international transparency and information exchange among tax authorities affect international estate planning.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_2_SS_4_R_8",
                                    "text": "READING 8. MANAGING INDIVIDUAL INVESTOR PORTFOLIOS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_a",
                                            "text": "a discuss how source of wealth measure of wealth and stage of life affect an individual investors’ risk tolerance;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_b",
                                            "text": "b explain the role of situational and psychological profiling in understanding an individual investor’s attitude toward risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_c",
                                            "text": "c explain the influence of investor psychology on risk tolerance and investment choices;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_d",
                                            "text": "d explain potential benefits for both clients and investment advisers of having a formal investment policy statement;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_e",
                                            "text": "e explain the process involved in creating an investment policy statement;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_f",
                                            "text": "f distinguish between required return and desired return and explain how these affect the individual investor’s investment policy;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_g",
                                            "text": "g explain how to set risk and return objectives for individual investor portfolios and discuss the impact that ability and willingness to take risk have on risk tolerance;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_h",
                                            "text": "h discuss the major constraint categories included in an individual investor’s investment policy statement;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_i",
                                            "text": "i prepare and justify an investment policy statement for an individual investor;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_j",
                                            "text": "j determine the strategic asset allocation that is most appropriate for an individual investor’s specific investment objectives and constraints;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_8_L_k",
                                            "text": "k compare Monte Carlo and traditional deterministic approaches to retirement planning and explain the advantages of a Monte Carlo approach.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_2_SS_4_R_9",
                                    "text": "READING 9. TAXES AND PRIVATE WEALTH MANAGEMENT IN A GLOBAL CONTEXT The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_a",
                                            "text": "a compare basic global taxation regimes as they relate to the taxation of dividend income interest income realized capital gains and unrealized capital gains;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_b",
                                            "text": "b determine the effects of different types of taxes and tax regimes on future wealth accumulation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_c",
                                            "text": "c calculate accrual equivalent tax rates and after- tax returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_d",
                                            "text": "d explain how investment return and investment horizon affect the tax impact associated with an investment;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_e",
                                            "text": "e discuss the tax profiles of different types of investment accounts and explain their impact on after- tax returns and future accumulations;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_f",
                                            "text": "f explain how taxes affect investment risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_g",
                                            "text": "g discuss the relation between after- tax returns and different types of investor trading behavior;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_h",
                                            "text": "h explain the benefits of tax loss harvesting and highest- in/first- out (HIFO) tax lot accounting;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_4_R_9_L_i",
                                            "text": "i demonstrate how taxes and asset location relate to mean–variance optimization.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_2_SS_5",
                            "text": "Study Session 5",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_2_SS_5_R_11",
                                    "text": "READING 11. CONCENTRATED SINGLE- ASSET POSITIONS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_a",
                                            "text": "a explain investment risks associated with a concentrated position in a single asset and discuss the appropriateness of reducing such risks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_b",
                                            "text": "b describe typical objectives in managing concentrated positions;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_c",
                                            "text": "c discuss tax consequences and illiquidity as considerations affecting the management of concentrated positions in publicly traded common shares privately held businesses and real estate;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_d",
                                            "text": "d discuss capital market and institutional constraints on an investor’s ability to reduce a concentrated position;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_e",
                                            "text": "e discuss psychological considerations that may make an investor reluctant to reduce his or her exposure to a concentrated position;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_f",
                                            "text": "f describe advisers’ use of goal- based planning in managing concentrated positions;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_g",
                                            "text": "g explain uses of asset location and wealth transfers in managing concentrated positions;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_h",
                                            "text": "h describe strategies for managing concentrated positions in publicly traded common shares;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_i",
                                            "text": "i discuss tax considerations in the choice of hedging strategy;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_j",
                                            "text": "j describe strategies for managing concentrated positions in privately held businesses;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_k",
                                            "text": "k describe strategies for managing concentrated positions in real estate;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_11_L_l",
                                            "text": "l evaluate and recommend techniques for tax efficiently managing the risks of concentrated positions in publicly traded common stock privately held businesses and real estate.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_2_SS_5_R_12",
                                    "text": "READING 12. RISK MANAGEMENT FOR INDIVIDUALS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_a",
                                            "text": "a compare the characteristics of human capital and financial capital as components of an individual’s total wealth;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_b",
                                            "text": "b discuss the relationships among human capital financial capital and net wealth;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_c",
                                            "text": "c discuss the financial stages of life for an individual;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_d",
                                            "text": "d describe an economic (holistic) balance sheet;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_e",
                                            "text": "e discuss risks (earnings premature death longevity property liability and health risks) in relation to human and financial capital;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_f",
                                            "text": "f describe types of insurance relevant to personal financial planning;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_g",
                                            "text": "g describe the basic elements of a life insurance policy and how insurers price a life insurance policy;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_h",
                                            "text": "h discuss the use of annuities in personal financial planning;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_i",
                                            "text": "i discuss the relative advantages and disadvantages of fixed and variable annuities;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_j",
                                            "text": "j analyze and critique an insurance program;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_k",
                                            "text": "k discuss how asset allocation policy may be influenced by the risk characteristics of human capital;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_5_R_12_L_l",
                                            "text": "l recommend and justify appropriate strategies for asset allocation and risk reduction when given an investor profile of key inputs;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_2_SS_6",
                            "text": "Study Session 6",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_2_SS_6_R_13",
                                    "text": "READING 13. MANAGING INSTITUTIONAL INVESTOR PORTFOLIOS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_a",
                                            "text": "a contrast a defined- benefit plan to a defined- contribution plan and discuss the advantages and disadvantages of each from the perspectives of the employee and the employer;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_b",
                                            "text": "b discuss investment objectives and constraints for defined- benefit plans;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_c",
                                            "text": "c evaluate pension fund risk tolerance when risk is considered from the perspective of the 1) plan surplus 2) sponsor financial status and profitability 3) sponsor and pension fund common risk exposures 4) plan features and 5) workforce characteristics;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_d",
                                            "text": "d prepare an investment policy statement for a defined- benefit plan;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_e",
                                            "text": "e evaluate the risk management considerations in investing pension plan assets;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_f",
                                            "text": "f prepare an investment policy statement for a participant directed defined- contribution plan;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_g",
                                            "text": "g discuss hybrid pension plans (e.g. cash balance plans) and employee stock ownership plans;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_h",
                                            "text": "h distinguish among various types of foundations with respect to their description purpose and source of funds;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_i",
                                            "text": "i compare the investment objectives and constraints of foundations endowments insurance companies and banks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_j",
                                            "text": "j discuss the factors that determine investment policy for pension funds foundation endowments life and non- life insurance companies and banks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_k",
                                            "text": "k prepare an investment policy statement for a foundation an endowment an insurance company and a bank;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_l",
                                            "text": "l contrast investment companies commodity pools and hedge funds to other types of institutional investors;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_m",
                                            "text": "m compare the asset/liability management needs of pension funds foundations endowments insurance companies and banks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_13_L_n",
                                            "text": "n compare the investment objectives and constraints of institutional investors given relevant data such as descriptions of their financial circumstances and attitudes toward risk.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_2_SS_6_R_14",
                                    "text": "READING 14. LINKING PENSION LIABILITIES TO ASSETS The candidate should be able to:",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_2_SS_6_R_14_L_a",
                                            "text": "a contrast the assumptions concerning pension liability risk in asset- only and liability- relative approaches to asset allocation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_14_L_b",
                                            "text": "b discuss the fundamental and economic exposures of pension liabilities and identify asset types that mimic these liability exposures;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_2_SS_6_R_14_L_c",
                                            "text": "c compare pension portfolios built from a traditional asset- only perspective to portfolios designed relative to liabilities and discuss why corporations may choose not to implement fully the liability mimicking portfolio.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        }
                    ],
                    "kind": "BOOK"
                },
                {
                    "id": "CFA_B_3",
                    "text": "Capital Market Expectations",
                    "leaf": false,
                    "view": "RevealLeft",
                    "items": [
                        {
                            "id": "CFA_B_3_SS_7",
                            "text": "Study Session 7",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_3_SS_7_R_15",
                                    "text": "READING 15. CAPITAL MARKET EXPECTATIONS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_a",
                                            "text": "a discuss the role of and a framework for capital market expectations in the portfolio management process;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_b",
                                            "text": "b discuss challenges in developing capital market forecasts;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_c",
                                            "text": "c demonstrate the application of formal tools for setting capital market expectations including statistical tools discounted cash flow models the risk premium approach and financial equilibrium models;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_d",
                                            "text": "d explain the use of survey and panel methods and judgment in setting capital market expectations;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_e",
                                            "text": "e discuss the inventory and business cycles the impact of consumer and business spending and monetary and fiscal policy on the business cycle;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_f",
                                            "text": "f discuss the impact that the phases of the business cycle have on short- term/ long- term capital market returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_g",
                                            "text": "g explain the relationship of inflation to the business cycle and the implications of inflation for cash bonds equity and real estate returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_h",
                                            "text": "h demonstrate the use of the Taylor rule to predict central bank behavior;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_i",
                                            "text": "i evaluate 1) the shape of the yield curve as an economic predictor and 2) the relationship between the yield curve and fiscal and monetary policy;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_j",
                                            "text": "j identify and interpret the components of economic growth trends and demonstrate the application of economic growth trend analysis to the formulation of capital market expectations;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_k",
                                            "text": "k explain how exogenous shocks may affect economic growth trends;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_l",
                                            "text": "l identify and interpret macroeconomic interest rate and exchange rate linkages between economies;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_m",
                                            "text": "m discuss the risks faced by investors in emerging- market securities and the country risk analysis techniques used to evaluate emerging market economies;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_n",
                                            "text": "n compare the major approaches to economic forecasting;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_o",
                                            "text": "o demonstrate the use of economic information in forecasting asset class returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_p",
                                            "text": "p explain how economic and competitive factors can affect investment markets sectors and specific securities;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_q",
                                            "text": "q discuss the relative advantages and limitations of the major approaches to forecasting exchange rates;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_15_L_r",
                                            "text": "r recommend and justify changes in the component weights of a global investment portfolio based on trends and expected changes in macroeconomic factors.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_3_SS_7_R_16",
                                    "text": "READING 16. EQUITY MARKET VALUATION The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_3_SS_7_R_16_L_a",
                                            "text": "a explain the terms of the Cobb- Douglas production function and demonstrate how the function can be used to model growth in real output under the assumption of constant returns to scale;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_16_L_b",
                                            "text": "b evaluate the relative importance of growth in total factor productivity in capital stock and in labor input given relevant historical data;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_16_L_c",
                                            "text": "c demonstrate the use of the Cobb- Douglas production function in obtaining a discounted dividend model estimate of the intrinsic value of an equity market;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_16_L_d",
                                            "text": "d critique the use of discounted dividend models and macroeconomic forecasts to estimate the intrinsic value of an equity market;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_16_L_e",
                                            "text": "e contrast top- down and bottom- up approaches to forecasting the earnings per share of an equity market index;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_16_L_f",
                                            "text": "f discuss the strengths and limitations of relative valuation models;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_7_R_16_L_g",
                                            "text": "g judge whether an equity market is under- fairly or over- valued using a relative equity valuation model",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_3_SS_8",
                            "text": "Study Session 8",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_3_SS_8_R_17",
                                    "text": "READING 17. ASSET ALLOCATION The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_a",
                                            "text": "a explain the function of strategic asset allocation in portfolio management and discuss its role in relation to specifying and controlling the investor’s exposures to systematic risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_b",
                                            "text": "b compare strategic and tactical asset allocation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_c",
                                            "text": "c discuss the importance of asset allocation for portfolio performance;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_d",
                                            "text": "d contrast the asset- only and asset/liability management (ALM) approaches to asset allocation and discuss the investor circumstances in which they are commonly used;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_e",
                                            "text": "e explain the advantage of dynamic over static asset allocation and discuss the trade- offs of complexity and cost;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_f",
                                            "text": "f explain how loss aversion mental accounting and fear of regret may influence asset allocation policy;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_g",
                                            "text": "g evaluate return and risk objectives in relation to strategic asset allocation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_h",
                                            "text": "h evaluate whether an asset class or set of asset classes has been appropriately specified;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_i",
                                            "text": "i select and justify an appropriate set of asset classes for an investor;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_j",
                                            "text": "j evaluate the theoretical and practical effects of including additional asset classes in an asset allocation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_k",
                                            "text": "k demonstrate the application of mean–variance analysis to decide whether to include an additional asset class in an existing portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_l",
                                            "text": "l describe risk cost and opportunities associated with nondomestic equities and bonds;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_m",
                                            "text": "m explain the importance of conditional return correlations in evaluating the diversification benefits of nondomestic investments;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_n",
                                            "text": "n explain expected effects on share prices expected returns and return volatility as a segmented market becomes integrated with global markets;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_o",
                                            "text": "o explain the major steps involved in establishing an appropriate asset allocation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_p",
                                            "text": "p discuss the strengths and limitations of the following approaches to asset allocation: mean–variance resampled efficient frontier Black–Litterman Monte Carlo simulation ALM and experience based;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_q",
                                            "text": "q discuss the structure of the minimum- variance frontier with a constraint against short sales;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_r",
                                            "text": "r formulate and justify a strategic asset allocation given an investment policy statement and capital market expectations;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_s",
                                            "text": "s compare the considerations that affect asset allocation for individual investors versus institutional investors and critique a proposed asset allocation in light of those considerations;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_8_R_17_L_t",
                                            "text": "t formulate and justify tactical asset allocation (TAA) adjustments to strategic asset class weights given a TAA strategy and expectational data.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_3_SS_9",
                            "text": "Study Session 9",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_3_SS_9_R_18",
                                    "text": "READING 18. CURRENCY MANAGEMENT: AN INTRODUCTION The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_a",
                                            "text": "a analyze the effects of currency movements on portfolio risk and return;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_b",
                                            "text": "b discuss strategic choices in currency management;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_c",
                                            "text": "c formulate an appropriate currency management program given financial market conditions and portfolio objectives and constraints;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_d",
                                            "text": "d compare active currency trading strategies based on economic fundamentals technical analysis carry- trade and volatility trading;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_e",
                                            "text": "e describe how changes in factors underlying active trading strategies affect tactical trading decisions;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_f",
                                            "text": "f describe how forward contracts and FX (foreign exchange) swaps are used to adjust hedge ratios;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_g",
                                            "text": "g describe trading strategies used to reduce hedging costs and modify the risk– return characteristics of a foreign- currency portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_h",
                                            "text": "h describe the use of cross- hedges macro- hedges and minimum- variance- hedge ratios in portfolios exposed to multiple foreign currencies;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_18_L_i",
                                            "text": "i discuss challenges for managing emerging market currency exposures.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_3_SS_9_R_19",
                                    "text": "READING 19. MARKET INDEXES AND BENCHMARKS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_a",
                                            "text": "a distinguish between benchmarks and market indexes;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_b",
                                            "text": "b describe investment uses of benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_c",
                                            "text": "c compare types of benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_d",
                                            "text": "d contrast liability- based benchmarks with asset- based benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_e",
                                            "text": "e describe investment uses of market indexes;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_f",
                                            "text": "f discuss tradeoffs in constructing market indexes;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_g",
                                            "text": "g discuss advantages and disadvantages of index weighting schemes;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_3_SS_9_R_19_L_h",
                                            "text": "h evaluate the selection of a benchmark for a particular investment strategy.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        }
                    ],
                    "kind": "BOOK"
                },
                {
                    "id": "CFA_B_4",
                    "text": "Fixed Income and Equity Portfolio Management",
                    "leaf": false,
                    "view": "RevealLeft",
                    "items": [
                        {
                            "id": "CFA_B_4_SS_10",
                            "text": "Study Session 10",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_4_SS_10_R_20",
                                    "text": "READING 20. FIXED- INCOME PORTFOLIO MANAGEMENT— PART I The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_a",
                                            "text": "a compare with respect to investment objectives the use of liabilities as a benchmark and the use of a bond index as a benchmark;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_b",
                                            "text": "b compare pure bond indexing enhanced indexing and active investing with respect to the objectives advantages disadvantages and management of each;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_c",
                                            "text": "c discuss the criteria for selecting a benchmark bond index and justify the selection of a specific index when given a description of an investor’s risk aversion income needs and liabilities;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_d",
                                            "text": "d critique the use of bond market indexes as benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_e",
                                            "text": "e describe and evaluate techniques such as duration matching and the use of key rate durations by which an enhanced indexer may seek to align the risk exposures of the portfolio with those of the benchmark bond index;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_f",
                                            "text": "f contrast and demonstrate the use of total return analysis and scenario analysis to assess the risk and return characteristics of a proposed trade;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_g",
                                            "text": "g formulate a bond immunization strategy to ensure funding of a predetermined liability and evaluate the strategy under various interest rate scenarios;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_h",
                                            "text": "h demonstrate the process of rebalancing a portfolio to reestablish a desired dollar duration;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_i",
                                            "text": "i explain the importance of spread duration;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_j",
                                            "text": "j discuss the extensions that have been made to classical immunization theory including the introduction of contingent immunization;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_k",
                                            "text": "k explain the risks associated with managing a portfolio against a liability structure including interest rate risk contingent claim risk and cap risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_l",
                                            "text": "l compare immunization strategies for a single liability multiple liabilities and general cash flows;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_m",
                                            "text": "m compare risk minimization with return maximization in immunized portfolios;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_20_L_n",
                                            "text": "n demonstrate the use of cash flow matching to fund a fixed set of future liabilities and compare the advantages and disadvantages of cash flow matching to those of immunization strategies.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_4_SS_10_R_21",
                                    "text": "READING 21. RELATIVE- VALUE METHODOLOGIES FOR GLOBAL CREDIT BOND PORTFOLIO MANAGEMENT The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_4_SS_10_R_21_L_a",
                                            "text": "a explain classic relative- value analysis based on top- down and bottom- up approaches to credit bond portfolio management;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_21_L_b",
                                            "text": "b discuss the implications of cyclical supply and demand changes in the primary corporate bond market and the impact of secular changes in the market’s dominant product structures;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_21_L_c",
                                            "text": "c explain the influence of investors’ short- and long- term liquidity needs on portfolio management decisions;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_21_L_d",
                                            "text": "d discuss common rationales for secondary market trading;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_10_R_21_L_e",
                                            "text": "e discuss corporate bond portfolio strategies that are based on relative value.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_4_SS_11",
                            "text": "Study Session 11",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_4_SS_11_R_22",
                                    "text": "READING 22. FIXED- INCOME PORTFOLIO MANAGEMENT— PART II The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_a",
                                            "text": "a evaluate the effect of leverage on portfolio duration and investment returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_b",
                                            "text": "b discuss the use of repurchase agreements (repos) to finance bond purchases and the factors that affect the repo rate;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_c",
                                            "text": "c critique the use of standard deviation target semivariance shortfall risk and value at risk as measures of fixed- income portfolio risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_d",
                                            "text": "d demonstrate the advantages of using futures instead of cash market instruments to alter portfolio risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_e",
                                            "text": "e formulate and evaluate an immunization strategy based on interest rate futures;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_f",
                                            "text": "f explain the use of interest rate swaps and options to alter portfolio cash flows and exposure to interest rate risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_g",
                                            "text": "g compare default risk credit spread risk and downgrade risk and demonstrate the use of credit derivative instruments to address each risk in the context of a fixed- income portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_h",
                                            "text": "h explain the potential sources of excess return for an international bond portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_i",
                                            "text": "i evaluate 1) the change in value for a foreign bond when domestic interest rates change and 2) the bond’s contribution to duration in a domestic portfolio given the duration of the foreign bond and the country beta;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_j",
                                            "text": "j recommend and justify whether to hedge or not hedge currency risk in an international bond investment;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_k",
                                            "text": "k describe how breakeven spread analysis can be used to evaluate the risk in seeking yield advantages across international bond markets;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_l",
                                            "text": "l discuss the advantages and risks of investing in emerging market debt;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_11_R_22_L_m",
                                            "text": "m discuss the criteria for selecting a fixed- income manage",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_4_SS_12",
                            "text": "Study Session 12",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_4_SS_12_R_23",
                                    "text": "READING 23. EQUITY PORTFOLIO MANAGEMENT The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_a",
                                            "text": "a discuss the role of equities in the overall portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_b",
                                            "text": "b discuss the rationales for passive active and semiactive (enhanced index) equity investment approaches and distinguish among those approaches with respect to expected active return and tracking risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_c",
                                            "text": "c recommend an equity investment approach when given an investor’s investment policy statement and beliefs concerning market efficiency;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_d",
                                            "text": "d distinguish among the predominant weighting schemes used in the construction of major equity market indices and evaluate the biases of each;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_e",
                                            "text": "e compare alternative methods for establishing passive exposure to an equity market including indexed separate or pooled accounts index mutual funds exchange- traded funds equity index futures and equity total return swaps;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_f",
                                            "text": "f compare full replication stratified sampling and optimization as approaches to constructing an indexed portfolio and recommend an approach when given a description of the investment vehicle and the index to be tracked;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_g",
                                            "text": "g explain and justify the use of equity investment–style classifications and discuss the difficulties in applying style definitions consistently;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_h",
                                            "text": "h explain the rationales and primary concerns of value investors and growth investors and discuss the key risks of each investment style;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_i",
                                            "text": "i compare techniques for identifying investment styles and characterize the style of an investor when given a description of the investor’s security selection method details on the investor’s security holdings or the results of a returns- based style analysis;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_j",
                                            "text": "j compare the methodologies used to construct equity style indices;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_k",
                                            "text": "k interpret the results of an equity style box analysis and discuss the consequences of style drift;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_l",
                                            "text": "l distinguish between positive and negative screens involving socially responsible investing criteria and discuss their potential effects on a portfolio’s style characteristics;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_m",
                                            "text": "m compare long–short and long- only investment strategies including their risks and potential alphas and explain why greater pricing inefficiency may exist on the short side of the market;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_n",
                                            "text": "n explain how a market- neutral portfolio can be “equitized” to gain equity market exposure and compare equitized market- neutral and short- extension portfolios;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_o",
                                            "text": "o compare the sell disciplines of active investors;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_p",
                                            "text": "p contrast derivatives- based and stock- based enhanced indexing strategies and justify enhanced indexing on the basis of risk control and the information ratio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_q",
                                            "text": "q recommend and justify in a risk- return framework the optimal portfolio allocations to a group of investment managers;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_r",
                                            "text": "r explain the core- satellite approach to portfolio construction and discuss the advantages and disadvantages of adding a completeness fund to control overall risk exposures;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_s",
                                            "text": "s distinguish among the components of total active return (“true” active return and “misfit” active return) and their associated risk measures and explain their relevance for evaluating a portfolio of managers;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_t",
                                            "text": "t explain alpha and beta separation as an approach to active management and demonstrate the use of portable alpha;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_u",
                                            "text": "u describe the process of identifying selecting and contracting with equity managers;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_4_SS_12_R_23_L_v",
                                            "text": "v contrast the top- down and bottom- up approaches to equity research.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        }
                    ],
                    "kind": "BOOK"
                },
                {
                    "id": "CFA_B_5",
                    "text": "Alternative Investments Risk Management and the Application of Derivatives",
                    "leaf": false,
                    "view": "RevealLeft",
                    "items": [
                        {
                            "id": "CFA_B_5_SS_13",
                            "text": "Study Session 13",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_5_SS_13_R_24",
                                    "text": "READING 24. ALTERNATIVE INVESTMENTS PORTFOLIO MANAGEMENT The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_a",
                                            "text": "a describe common features of alternative investments and their markets and how alternative investments may be grouped by the role they typically play in a portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_b",
                                            "text": "b explain and justify the major due diligence checkpoints involved in selecting active managers of alternative investments;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_c",
                                            "text": "c explain distinctive issues that alternative investments raise for investment advisers of private wealth clients;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_d",
                                            "text": "d distinguish among the principal classes of alternative investments including real estate private equity commodity investments hedge funds managed futures buyout funds infrastructure funds and distressed securities;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_e",
                                            "text": "e discuss the construction and interpretation of benchmarks and the problem of benchmark bias in alternative investment groups;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_f",
                                            "text": "f evaluate the return enhancement and/or risk diversification effects of adding an alternative investment to a reference portfolio (for example a portfolio invested solely in common equity and bonds);",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_g",
                                            "text": "g describe advantages and disadvantages of direct equity investments in real estate;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_h",
                                            "text": "h discuss the major issuers and suppliers of venture capital the stages through which private companies pass (seed stage through exit) the characteristic sources of financing at each stage and the purpose of such financing;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_i",
                                            "text": "i compare venture capital funds and buyout funds;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_j",
                                            "text": "j discuss the use of convertible preferred stock in direct venture capital investment;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_k",
                                            "text": "k explain the typical structure of a private equity fund including the compensation to the fund’s sponsor (general partner) and typical timelines;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_l",
                                            "text": "l discuss issues that must be addressed in formulating a private equity investment strategy;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_m",
                                            "text": "m compare indirect and direct commodity investment;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_n",
                                            "text": "n explain the three components of return for a commodity futures contract and the effect that an upward- or downward- sloping term structure of futures prices will have on roll yield;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_o",
                                            "text": "o describe the principal roles suggested for commodities in a portfolio and explain why some commodity classes may provide a better hedge against inflation than others;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_p",
                                            "text": "p identify and explain the style classification of a hedge fund given a description of its investment strategy;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_q",
                                            "text": "q discuss the typical structure of a hedge fund including the fee structure and explain the rationale for high- water mark provisions;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_r",
                                            "text": "r describe the purpose and characteristics of fund- of- funds hedge funds;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_s",
                                            "text": "s discuss concerns involved in hedge fund performance evaluation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_t",
                                            "text": "t describe trading strategies of managed futures programs and the role of managed futures in a portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_u",
                                            "text": "u describe strategies and risks associated with investing in distressed securities;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_13_R_24_L_v",
                                            "text": "v explain event risk market liquidity risk market risk and “J- factor risk” in relation to investing in distressed securities.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_5_SS_14",
                            "text": "Study Session 14",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_5_SS_14_R_25",
                                    "text": "READING 25. RISK MANAGEMENT The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_a",
                                            "text": "a discuss features of the risk management process risk governance risk reduction and an enterprise risk management system;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_b",
                                            "text": "b evaluate strengths and weaknesses of a company’s risk management process;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_c",
                                            "text": "c describe steps in an effective enterprise risk management system;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_d",
                                            "text": "d evaluate a company’s or a portfolio’s exposures to financial and nonfinancial risk factors;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_e",
                                            "text": "e calculate and interpret value at risk (VaR) and explain its role in measuring overall and individual position market risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_f",
                                            "text": "f compare the analytical (variance–covariance) historical and Monte Carlo methods for estimating VaR and discuss the advantages and disadvantages of each;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_g",
                                            "text": "g discuss advantages and limitations of VaR and its extensions including cash flow at risk earnings at risk and tail value at risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_h",
                                            "text": "h compare alternative types of stress testing and discuss advantages and disadvantages of each;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_i",
                                            "text": "i evaluate the credit risk of an investment position including forward contract swap and option positions;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_j",
                                            "text": "j demonstrate the use of risk budgeting position limits and other methods for managing market risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_k",
                                            "text": "k demonstrate the use of exposure limits marking to market collateral netting arrangements credit standards and credit derivatives to manage credit risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_l",
                                            "text": "l discuss the Sharpe ratio risk- adjusted return on capital return over maximum drawdown and the Sortino ratio as measures of risk- adjusted performance;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_14_R_25_L_m",
                                            "text": "m demonstrate the use of VaR and stress testing in setting capital requirements.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_5_SS_15",
                            "text": "Study Session 15",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_5_SS_15_R_26",
                                    "text": "READING 26. RISK MANAGEMENT APPLICATIONS OF FORWARD AND FUTURES STRATEGIES The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_5_SS_15_R_26_L_a",
                                            "text": "a demonstrate the use of equity futures contracts to achieve a target beta for a stock portfolio and calculate and interpret the number of futures contracts required;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_26_L_b",
                                            "text": "b construct a synthetic stock index fund using cash and stock index futures (equitizing cash);",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_26_L_c",
                                            "text": "c explain the use of stock index futures to convert a long stock position into synthetic cash;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_26_L_d",
                                            "text": "d demonstrate the use of equity and bond futures to adjust the allocation of a portfolio between equity and debt;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_26_L_e",
                                            "text": "e demonstrate the use of futures to adjust the allocation of a portfolio across equity sectors and to gain exposure to an asset class in advance of actually committing funds to the asset class;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_26_L_f",
                                            "text": "f explain exchange rate risk and demonstrate the use of forward contracts to reduce the risk associated with a future receipt or payment in a foreign currency;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_26_L_g",
                                            "text": "g explain the limitations to hedging the exchange rate risk of a foreign market portfolio and discuss feasible strategies for managing such risk.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_5_SS_15_R_27",
                                    "text": "READING 27. RISK MANAGEMENT APPLICATIONS OF OPTION STRATEGIES The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_5_SS_15_R_27_L_a",
                                            "text": "a compare the use of covered calls and protective puts to manage risk exposure to individual securities;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_27_L_b",
                                            "text": "b calculate and interpret the value at expiration profit maximum profit maximum loss breakeven underlying price at expiration and general shape of the graph for the following option strategies: bull spread bear spread butterfly spread collar straddle box spread;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_27_L_c",
                                            "text": "c calculate the effective annual rate for a given interest rate outcome when a borrower (lender) manages the risk of an anticipated loan using an interest rate call (put) option;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_27_L_d",
                                            "text": "d calculate the payoffs for a series of interest rate outcomes when a floating rate loan is combined with 1) an interest rate cap 2) an interest rate floor or 3) an interest rate collar;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_27_L_e",
                                            "text": "e explain why and how a dealer delta hedges an option position why delta changes and how the dealer adjusts to maintain the delta hedge;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_27_L_f",
                                            "text": "f interpret the gamma of a delta- hedged portfolio and explain how gamma changes as in- the- money and out- of- the- money options move toward expiration.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_5_SS_15_R_28",
                                    "text": "READING 28. RISK MANAGEMENT APPLICATIONS OF SWAP STRATEGIES The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_a",
                                            "text": "a demonstrate how an interest rate swap can be used to convert a floating- rate (fixed- rate) loan to a fixed- rate (floating- rate) loan;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_b",
                                            "text": "b calculate and interpret the duration of an interest rate swap;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_c",
                                            "text": "c explain the effect of an interest rate swap on an entity’s cash flow risk;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_d",
                                            "text": "d determine the notional principal value needed on an interest rate swap to achieve a desired level of duration in a fixed- income portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_e",
                                            "text": "e explain how a company can generate savings by issuing a loan or bond in its own currency and using a currency swap to convert the obligation into another currency;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_f",
                                            "text": "f demonstrate how a firm can use a currency swap to convert a series of foreign cash receipts into domestic cash receipts;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_g",
                                            "text": "g explain how equity swaps can be used to diversify a concentrated equity portfolio provide international diversification to a domestic portfolio and alter portfolio allocations to stocks and bonds;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_5_SS_15_R_28_L_h",
                                            "text": "h demonstrate the use of an interest rate swaption 1) to change the payment pattern of an anticipated future loan and 2) to terminate a swap.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        }
                    ],
                    "kind": "BOOK"
                },
                {
                    "id": "CFA_B_6",
                    "text": "Portfolio: Execution Evaluation and Attribution and Global Investment Performance Standards",
                    "leaf": false,
                    "view": "RevealLeft",
                    "items": [
                        {
                            "id": "CFA_B_6_SS_16",
                            "text": "Study Session 16",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_6_SS_16_R_29",
                                    "text": "READING 29. EXECUTION OF PORTFOLIO DECISIONS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_a",
                                            "text": "a compare market orders with limit orders including the price and execution uncertainty of each;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_b",
                                            "text": "b calculate and interpret the effective spread of a market order and contrast it to the quoted bid–ask spread as a measure of trading cost;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_c",
                                            "text": "c compare alternative market structures and their relative advantages;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_d",
                                            "text": "d compare the roles of brokers and dealers;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_e",
                                            "text": "e explain the criteria of market quality and evaluate the quality of a market when given a description of its characteristics;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_f",
                                            "text": "f explain the components of execution costs including explicit and implicit costs and evaluate a trade in terms of these costs;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_g",
                                            "text": "g calculate and discuss implementation shortfall as a measure of transaction costs;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_h",
                                            "text": "h contrast volume weighted average price (VWAP) and implementation shortfall as measures of transaction costs;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_i",
                                            "text": "i explain the use of econometric methods in pretrade analysis to estimate implicit transaction costs;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_j",
                                            "text": "j discuss the major types of traders based on their motivation to trade time versus price preferences and preferred order types;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_k",
                                            "text": "k describe the suitable uses of major trading tactics evaluate their relative costs advantages and weaknesses and recommend a trading tactic when given a description of the investor’s motivation to trade the size of the trade and key market characteristics;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_l",
                                            "text": "l explain the motivation for algorithmic trading and discuss the basic classes of algorithmic trading strategies;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_m",
                                            "text": "m discuss the factors that typically determine the selection of a specific algorithmic trading strategy including order size average daily trading volume bid–ask spread and the urgency of the order;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_n",
                                            "text": "n explain the meaning and criteria of best execution;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_o",
                                            "text": "o evaluate a firm’s investment and trading procedures including processes disclosures and record keeping with respect to best execution;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_29_L_p",
                                            "text": "p discuss the role of ethics in trading.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                },
                                {
                                    "id": "CFA_B_6_SS_16_R_30",
                                    "text": "READING 30. MONITORING AND REBALANCING The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_a",
                                            "text": "a discuss a fiduciary’s responsibilities in monitoring an investment portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_b",
                                            "text": "b discuss the monitoring of investor circumstances market/economic conditions and portfolio holdings and explain the effects that changes in each of these areas can have on the investor’s portfolio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_c",
                                            "text": "c recommend and justify revisions to an investor’s investment policy statement and strategic asset allocation given a change in investor circumstances;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_d",
                                            "text": "d discuss the benefits and costs of rebalancing a portfolio to the investor’s strategic asset allocation;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_e",
                                            "text": "e contrast calendar rebalancing to percentage- of- portfolio rebalancing;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_f",
                                            "text": "f discuss the key determinants of the optimal corridor width of an asset class in a percentage- of- portfolio rebalancing program;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_g",
                                            "text": "g compare the benefits of rebalancing an asset class to its target portfolio weight versus rebalancing the asset class to stay within its allowed range;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_h",
                                            "text": "h explain the performance consequences in up down and flat markets of 1) rebalancing to a constant mix of equities and bills 2) buying and holding equities and 3) constant proportion portfolio insurance (CPPI);",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_i",
                                            "text": "i distinguish among linear concave and convex rebalancing strategies;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_16_R_30_L_j",
                                            "text": "j judge the appropriateness of constant mix buy- and- hold and CPPI rebalancing strategies when given an investor’s risk tolerance and asset return expectations.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_6_SS_17",
                            "text": "Study Session 17",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_6_SS_17_R_31",
                                    "text": "READING 31. EVALUATING PORTFOLIO PERFORMANCE The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_a",
                                            "text": "a demonstrate the importance of performance evaluation from the perspective of fund sponsors and the perspective of investment managers;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_b",
                                            "text": "b explain the following components of portfolio evaluation: performance measurement performance attribution and performance appraisal;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_c",
                                            "text": "c calculate interpret and contrast time- weighted and money- weighted rates of return and discuss how each is affected by cash contributions and withdrawals;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_d",
                                            "text": "d identify and explain potential data quality issues as they relate to calculating rates of return;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_e",
                                            "text": "e demonstrate the decomposition of portfolio returns into components attributable to the market to style and to active management;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_f",
                                            "text": "f discuss the properties of a valid performance benchmark and explain advantages and disadvantages of alternative types of benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_g",
                                            "text": "g explain the steps involved in constructing a custom security- based benchmark;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_h",
                                            "text": "h discuss the validity of using manager universes as benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_i",
                                            "text": "i evaluate benchmark quality by applying tests of quality to a variety of possible benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_j",
                                            "text": "j discuss issues that arise when assigning benchmarks to hedge funds;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_k",
                                            "text": "k distinguish between macro and micro performance attribution and discuss the inputs typically required for each;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_l",
                                            "text": "l demonstrate and contrast the use of macro and micro performance attribution methodologies to identify the sources of investment performance;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_m",
                                            "text": "m discuss the use of fundamental factor models in micro performance attribution;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_n",
                                            "text": "n evaluate the effects of the external interest rate environment and active management on fixed- income portfolio returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_o",
                                            "text": "o explain the management factors that contribute to a fixed- income portfolio’s total return and interpret the results of a fixed- income performance attribution analysis;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_p",
                                            "text": "p calculate interpret and contrast alternative risk- adjusted performance measures including (in their ex post forms) alpha information ratio Treynor measure Sharpe ratio and M2;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_q",
                                            "text": "q explain how a portfolio’s alpha and beta are incorporated into the information ratio Treynor measure and Sharpe ratio;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_r",
                                            "text": "r demonstrate the use of performance quality control charts in performance appraisal;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_s",
                                            "text": "s discuss the issues involved in manager continuation policy decisions including the costs of hiring and firing investment managers;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_17_R_31_L_t",
                                            "text": "t contrast Type I and Type II errors in manager continuation decisions.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        },
                        {
                            "id": "CFA_B_6_SS_18",
                            "text": "Study Session 18",
                            "leaf": false,
                            "view": "RevealLeft",
                            "items": [
                                {
                                    "id": "CFA_B_6_SS_18_R_32",
                                    "text": "READING 32. OVERVIEW OF THE GLOBAL INVESTMENT PERFORMANCE STANDARDS The candidate should be able to: ",
                                    "leaf": false,
                                    "view": "RevealLeft",
                                    "items": [
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_a",
                                            "text": "a discuss the objectives key characteristics and scope of the GIPS standards and their benefits to prospective clients and investment managers;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_b",
                                            "text": "b explain the fundamentals of compliance with the GIPS standards including the definition of the firm and the firm’s definition of discretion;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_c",
                                            "text": "c explain the requirements and recommendations of the GIPS standards with respect to input data including accounting policies related to valuation and performance measurement;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_d",
                                            "text": "d discuss the requirements of the GIPS standards with respect to return calculation methodologies including the treatment of external cash flows cash and cash equivalents and expenses and fees;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_e",
                                            "text": "e explain the requirements and recommendations of the GIPS standards with respect to composite return calculations including methods for asset- weighting portfolio returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_f",
                                            "text": "f explain the meaning of “discretionary” in the context of composite construction and given a description of the relevant facts determine whether a portfolio is likely to be considered discretionary;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_g",
                                            "text": "g explain the role of investment mandates objectives or strategies in the construction of composites;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_h",
                                            "text": "h explain the requirements and recommendations of the GIPS standards with respect to composite construction including switching portfolios among composites the timing of the inclusion of new portfolios in composites and the timing of the exclusion of terminated portfolios from composites;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_i",
                                            "text": "i explain the requirements of the GIPS standards for asset class segments carved out of multi- class portfolios;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_j",
                                            "text": "j explain the requirements and recommendations of the GIPS standards with respect to disclosure including fees the use of leverage and derivatives conformity with laws and regulations that conflict with the GIPS standards and noncompliant performance periods;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_k",
                                            "text": "k explain the requirements and recommendations of the GIPS standards with respect to presentation and reporting including the required timeframe of compliant performance periods annual returns composite assets and benchmarks;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_l",
                                            "text": "l explain the conditions under which the performance of a past firm or affiliation must be linked to or used to represent the historical performance of a new or acquiring firm;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_m",
                                            "text": "m evaluate the relative merits of high/low range interquartile range and equal- weighted or asset- weighted standard deviation as measures of the internal dispersion of portfolio returns within a composite for annual periods;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_n",
                                            "text": "n identify the types of investments that are subject to the GIPS standards for real estate and private equity;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_o",
                                            "text": "o explain the provisions of the GIPS standards for real estate and private equity;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_p",
                                            "text": "p explain the provisions of the GIPS standards for Wrap fee/Separately Managed Accounts;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_q",
                                            "text": "q explain the requirements and recommended valuation hierarchy of the GIPS Valuation Principles;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_r",
                                            "text": "r determine whether advertisements comply with the GIPS Advertising Guidelines;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_s",
                                            "text": "s discuss the purpose scope and process of verification;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_t",
                                            "text": "t discuss challenges related to the calculation of after- tax returns;",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        },
                                        {
                                            "id": "CFA_B_6_SS_18_R_32_L_u",
                                            "text": "u identify and explain errors and omissions in given performance presentations and recommend changes that would bring them into compliance with GIPS standards.",
                                            "leaf": true,
                                            "view": "RevealLeft",
                                            "items": [],
                                            "kind": "LOS"
                                        }
                                    ],
                                    "kind": "READING"
                                }
                            ],
                            "kind": "STUDY_SESSION"
                        }
                    ],
                    "kind": "BOOK"
                }
            ]
        },
        proxy: {
            type: 'jsonp',
            url: smartcfaclienttouch.protocolHostPort+'/getCatalogTree',
            callbackName: 'myCallback'
            /*,success: function(data) {
             callback();
             }*/
        }
    }
});

