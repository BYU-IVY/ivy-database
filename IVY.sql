-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 06, 2021 at 09:42 AM
-- Server version: 8.0.23-0ubuntu0.20.04.1
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `IVY`
--

-- --------------------------------------------------------

--
-- Table structure for table `Control`
--

CREATE TABLE `Control` (
  `ConrolID` int NOT NULL,
  `FrameworkID` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Control`
--

INSERT INTO `Control` (`ConrolID`, `FrameworkID`, `Name`, `Description`) VALUES
(21, 3, 'CIS 1', 'Inventory of Authorized and Unauthorized Devices'),
(22, 3, 'CIS 2', 'Inventory of Authorized and Unauthorized Software'),
(23, 3, 'CIS 3', 'Continuous Vulnerability Assessment and Remediation'),
(24, 3, 'CIS 4', 'Controlled Use of Administrative Privileges'),
(25, 3, 'CIS 5', 'Secure Configurations for Hardware and Software on Mobile Devices, Laptops, Workstations, and Servers'),
(26, 3, 'CIS 6', 'Maintenance, Monitoring, and Analysis of Audit Logs'),
(27, 3, 'CIS 7', 'Email and Web Browser Protections'),
(28, 3, 'CIS 8', 'Malware Defenses'),
(29, 3, 'CIS 9', 'Limitation and Control of Network Ports, Protocols, and Services'),
(30, 3, 'CIS 10', 'Data Recovery Capability'),
(31, 3, 'CIS 11', 'Secure Configurations for Network Devices such as Firewalls, Routers, and Switches'),
(32, 3, 'CIS 12', 'Boundary Defense'),
(33, 3, 'CIS 13', 'Data Protection'),
(34, 3, 'CIS 14', 'Controlled Access Based on the Need to Know'),
(35, 3, 'CIS 15', 'Wireless Access Control'),
(36, 3, 'CIS 16', 'Account Monitoring and Control'),
(37, 3, 'CIS 17', 'Security Skills Assessment and Appropriate Training to Fill Gaps'),
(38, 3, 'CIS 18', 'Application Software Security'),
(39, 3, 'CIS 19', 'Incident Response and Management'),
(40, 3, 'CIS 20', 'Penetration Tests and Red Team Exercises'),
(41, 1, 'HIPAA 1', 'The entire facility is HIPAA compliant'),
(42, 1, 'HIPAA 1.1', 'Have a written consent form for disclosure of individual’s health information'),
(43, 1, 'HIPAA 1.2', 'Facility access is limited; facility is secure'),
(44, 1, 'HIPAA 1.3', 'Patient files are only accessible to those who need clearance'),
(45, 1, 'HIPAA 1.4', 'Printed medical records kept locked away and safe out of public view'),
(46, 1, 'HIPAA 1.5', 'Notice of privacy practices posted'),
(47, 1, 'HIPAA 1.6', 'All third-party access is restricted'),
(48, 1, 'HIPAA 1.7', 'Official privacy officer has been designated'),
(49, 1, 'HIPAA 2', 'Employees & business associates are aware of & in compliance with HIPAA rules'),
(50, 1, 'HIPAA 2.1', 'Compliance training is provided to employees upon hiring & on a regular basis'),
(51, 1, 'HIPAA 2.2', 'Strict social media usage policies at work'),
(52, 1, 'HIPAA 2.3', 'Each individual has a unique 10 digit national provider identifier (NPI)'),
(53, 1, 'HIPAA 2.4', 'Type 1 NPI for individuals, type 2 NPI for organizations'),
(54, 1, 'HIPAA 2.5', 'All covered entities in practice have NPI'),
(55, 1, 'HIPAA 2.6', 'Employees and business associates understand what practice must and may do under privacy rules'),
(56, 1, 'HIPAA 3', 'Computer & device usage is compliant'),
(57, 1, 'HIPAA 3.1', 'Activity audit rules in place'),
(58, 1, 'HIPAA 3.2', 'Automatic logoff set up for all private files'),
(59, 1, 'HIPAA 3.3', 'Computer access is restricted to those who need it, and access is frequently reviewed and update'),
(60, 1, 'HIPAA 3.4', 'Workstations have a protective surrounding and are not visible from unrestricted area'),
(61, 1, 'HIPAA 3.5', 'Tools in place for encryption and decryption of private information'),
(62, 1, 'HIPAA 3.6', 'EHR is modern and compatible with latest software'),
(63, 1, 'HIPAA 3.7', 'Frequent inventory of mobile hardware'),
(64, 1, 'HIPAA 3.8', 'Texting - both parties have encryption programs that allow confidential information to be safely texted'),
(65, 1, 'HIPAA 4', 'ePHI usage is compliant'),
(66, 1, 'HIPAA 4.1', 'Policies in place to govern how ePHI is removed from mobile device before re-used'),
(67, 1, 'HIPAA 4.2', 'Mechanism in place to authenticate ePHI'),
(68, 1, 'HIPAA 4.3', 'Keep record of all uses and disclosures of ePHI'),
(69, 1, 'HIPAA 4.4', 'Performed risk analysis for ePHI'),
(70, 1, 'HIPAA 5', 'Breach safeguards & procedures in place'),
(71, 1, 'HIPAA 5.1', 'Appropriate response planned in the case of accidental or purposeful release of private information'),
(72, 1, 'HIPAA 5.2', 'Risk management policy in place'),
(73, 1, 'HIPAA 5.3', 'Contingency plan has been tested'),
(74, 1, 'HIPAA 5.4', 'Create and maintain written document of policies and procedures developed'),
(75, 1, 'HIPAA 5.5', 'Understand penalties for violations'),
(76, 1, 'HIPAA 6', 'Breaches are reported as noted by HHS'),
(77, 1, 'HIPAA 6.1', 'Processes in place to provide breach information without unreasonable delay no later than 60 days following discovery of breach'),
(78, 1, 'HIPAA 6.2', 'Notifications smaller than 500 individuals are submitted to HHS annually'),
(79, 2, 'PCI 1', 'Install and maintain a firewall configuration to protect cardholder data'),
(80, 2, 'PCI 1.1', 'Establish and implement firewall and router configuration standards that formalize testing whenever configurations change; that identify all connections between the cardholder data environement and other networks (including wireless) with documentation and diagrams; that document business justification and various technical settings for each implementation; that diagram all cardholder data flows across systems and networks; and stipulate a review of configuration rule sets at least every six months.'),
(81, 2, 'PCI 1.2', 'Build firewall and router configurations that restrict all traffic, inbound and outbound, from untrusted networks (including wireless) and hosts, and specifically deny all other traffic except for protocols necessary for the cardholder data environment.'),
(82, 2, 'PCI 1.3', 'Prohibit direct public access between the Internet and any system component in the cardholder data environment.'),
(83, 2, 'PCI 1.4', 'Install personal firewall software or equivalent functionality on any devices (including company and/or employee owned) that connect to the Internet when outside the network (for example, laptops used by employees), and which are also used to access the cardholder data environement.'),
(84, 2, 'PCI 1.5', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties. '),
(85, 2, 'PCI 2', 'Do not use vendor-supplied defaults for system passwords and other security parameters'),
(86, 2, 'PCI 2.1', 'Always change ALL vendor-supplied defaults and remove or disable unnecessary default accounts  before installing a system on the network. This includes wireless devices that are connected to the  cardholder data environment or are used to transmit cardholder data.'),
(87, 2, 'PCI 2.2', 'Develop configuration standards for all system components that address all known security  vulnerabilities and are consistent with industry-accepted definitions. Update system configuration  standards as new vulnerability issues are identified.'),
(88, 2, 'PCI 2.3', 'Using strong cryptography, encrypt all non-console administrative access'),
(89, 2, 'PCI 2.4', 'Maintain an inventory of system components that are in scope for PCI DSS.'),
(90, 2, 'PCI 2.5', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties'),
(91, 2, 'PCI 2.6', 'Shared hosting providers must protect each entity’s hosted environment and cardholder data  (details are in PCI DSS Appendix A1: “Additional PCI DSS Requirements for Shared Hosting  Providers.”) '),
(92, 2, 'PCI 3', 'Protect stored cardholder data'),
(93, 2, 'PCI 3.1', 'Limit cardholder data storage and retention time to that which is required for business, legal, and/ or regulatory purposes, as documented in your data retention policy. Purge unnecessary stored  data at least quarterly.'),
(94, 2, 'PCI 3.2', 'Do not store sensitive authentication data after authorization (even if it is encrypted). See  table below. Render all sensitive authentication data unrecoverable upon completion of the  authorization process. Issuers and related entities may store sensitive authentication data if there is  a business justification, and the data is stored securely.'),
(95, 2, 'PCI 3.3', 'Mask PAN when displayed (the first six and last four digits are the maximum number of digits you  may display), so that only authorized people with a legitimate business need can see more than  the first six/last four digits of the PAN. This does not supersede stricter requirements that may be in  place for displays of cardholder data, such as on a point-of-sale receipt. '),
(96, 2, 'PCI 3.4', 'Render PAN unreadable anywhere it is stored – including on portable digital media, backup  media, in logs, and data received from or stored by wireless networks. Technology solutions for  this requirement may include strong one-way hash functions of the entire PAN, truncation, index  tokens with securely stored pads, or strong cryptography. (See PCI DSS Glossary for definition of  strong cryptography.) '),
(97, 2, 'PCI 3.5', 'Document and implement procedures to protect any keys used for encryption of cardholder data  from disclosure and misuse. '),
(98, 2, 'PCI 3.6', 'Fully document and implement key management processes and procedures for cryptographic  keys used for encryption of cardholder data. '),
(99, 2, 'PCI 3.7', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties.'),
(100, 2, 'PCI 4', 'Encrypt transmission of cardholder data across open, public networks'),
(101, 2, 'PCI 4.1', 'Use strong cryptography and security protocols to safeguard sensitive cardholder data during transmission over open, public networks (e.g. Internet, wireless technologies, cellular technologies, General Packet Radio Service [GPRS], satellite communications). Ensure wireless networks transmitting cardholder data or connected to the cardholder data environment use industry best practices to implement strong encryption for authentication and transmission.'),
(102, 2, 'PCI 4.2', 'Never send unprotected PANs by end user messaging technologies (for example, e-mail, instant  \nmessaging, SMS, chat, etc.).'),
(103, 2, 'PCI 4.3', 'Ensure that related security policies and operational procedures are documented, in use, and  \nknown to all affected parties.'),
(104, 2, 'PCI 5', 'Use and regularly update anti-virus software or programs'),
(105, 2, 'PCI 5.1', 'Deploy anti-virus software on all systems commonly affected by malicious software (particularly  personal computers and servers). For systems not affected commonly by malicious software,  perform periodic evaluations to evaluate evolving malware threats and confirm whether such  systems continue to not require anti-virus software. '),
(106, 2, 'PCI 5.2', 'Ensure that all anti-virus mechanisms are kept current, perform periodic scans, generate audit logs,  which are retained per PCI DSS Requirement 10.7.'),
(107, 2, 'PCI 5.3', 'Ensure that anti-virus mechanisms are actively running and cannot be disabled or altered by users,  unless specifically authorized by management on a case-by-case basis for a limited time period.'),
(108, 2, 'PCI 5.4', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties. \n'),
(109, 2, 'PCI 6', 'Develop and maintain secure systems and applications'),
(110, 2, 'PCI 6.1', 'Establish a process to identify security vulnerabilities, using reputable outside sources, and assign a  risk ranking (e.g. “high,” “medium,” or “low”) to newly discovered security vulnerabilities.'),
(111, 2, 'PCI 6.2', 'Protect all system components and software from known vulnerabilities by installing applicable  vendor-supplied security patches. Install critical security patches within one month of release.'),
(112, 2, 'PCI 6.3', 'Develop internal and external software applications including web-based administrative access  to applications in accordance with PCI DSS and based on industry best practices. Incorporate  information security throughout the software development life cycle. This applies to all software  developed internally as well as bespoke or custom software developed by a third party.'),
(113, 2, 'PCI 6.4', 'Follow change control processes and procedures for all changes to system components. Ensure all 18 relevant PCI DSS requirements are implemented on new or changed systems and networks after  significant changes.'),
(114, 2, 'PCI 6.5', 'Prevent common coding vulnerabilities in software development processes by training developers  in secure coding techniques and developing applications based on secure coding guidelines –  including how sensitive data is handled in memory.'),
(115, 2, 'PCI 6.6', 'Ensure all public-facing web applications are protected against known attacks, either by  performing application vulnerability assessment at least annually and after any changes, or by  installing an automated technical solution that detects and prevents web-based attacks (for  example, a web-application firewall) in front of public-facing web applications, to continually check  all traffic.'),
(116, 2, 'PCI 6.7', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties.'),
(117, 2, 'PCI 7', 'Restrict access to cardholder data by business need to know'),
(118, 2, 'PCI 7.1', 'Limit access to system components and cardholder data to only those individuals whose job  requires such access.'),
(119, 2, 'PCI 7.2', 'Establish an access control system(s) for systems components that restricts access based on a user’s  need to know, and is set to “deny all” unless specifically allowed. '),
(120, 2, 'PCI 7.3', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties. '),
(121, 2, 'PCI 8', 'Assign a unique ID to each person with computer access'),
(122, 2, 'PCI 8.1', 'Define and implement policies and procedures to ensure proper user identification management  for users and administrators on all system components. Assign all users a unique user name before  allowing them to access system components or cardholder data.'),
(123, 2, 'PCI 8.2', 'Employ at least one of these to authenticate all users: something you know, such as a password  or passphrase; something you have, such as a token device or smart card; or something you are,  such as a biometric. Use strong authentication methods and render all passwords/passphrases  unreadable during transmission and storage using strong cryptography.  \n'),
(124, 2, 'PCI 8.3', 'Secure all individual non-console administrative access and all remote access to the cardholder  data environment using multi-factor authentication. This requires at least two of the three  authentication methods described in 8.2 are used for authentication. Using one factor twice (e.g.  using two separate passwords) is not considered multi-factor authentication. This requirement  applies to administrative personnel with non-console access to the CDE from within the entity’s  network, and all remote network access (including for users, administrators, and third-parties)  originating from outside the entity’s network. '),
(125, 2, 'PCI 8.4', 'Develop, implement, and communicate authentication policies and procedures to all users.'),
(126, 2, 'PCI 8.5', 'Do not use group, shared, or generic IDs, or other authentication methods. Service providers  with access to customer environments must use a unique authentication credential (such as a  password/passphrase) for each customer environment. \n'),
(127, 2, 'PCI 8.6', 'Use of other authentication mechanisms such as physical security tokens, smart cards, and  certificates must be assigned to an individual account.'),
(128, 2, 'PCI 8.7', 'All access to any database containing cardholder data must be restricted: all user access must be  through programmatic methods; only database administrators can have direct or query access;  and application IDs for database applications can only be used by the applications (and not by  users or non-application processes).'),
(129, 2, 'PCI 8.8', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties.'),
(130, 2, 'PCI 9', 'Restrict physical access to cardholder data'),
(131, 2, 'PCI 9.1', 'Use appropriate facility entry controls to limit and monitor physical access to systems in the  cardholder data environment.'),
(132, 2, 'PCI 9.2', 'Develop procedures to easily distinguish between onsite personnel and visitors, such as assigning  ID badges'),
(133, 2, 'PCI 9.3', 'Control physical access for onsite personnel to the sensitive areas. Access must be authorized and  based on individual job function; access must be revoked immediately upon termination, and all  physical access mechanisms, such as keys, access cards, etc. returned or disabled. '),
(134, 2, 'PCI 9.4', 'Ensure all visitors are authorized before entering areas where cardholder data is processed or maintained, given a physical badge or other identification that expires and identifies visitors as not onsite personnel, and are asked to surrender the physical badge before leaving the facility or at the date of expiration. Use a visitor log to maintain a physical audit trail of visitor information and activity, including visitor name, company, and the onsite personnel authorizing physical access. Retain the log for at least three months unless otherwise restricted by law.'),
(135, 2, 'PCI 9.5', 'Physically secure all media; store media back-ups in a secure location, preferably off site.'),
(136, 2, 'PCI 9.6', 'Maintain strict control over the internal or external distribution of any kind of media. '),
(137, 2, 'PCI 9.7', 'Maintain strict control over the storage and accessibility of media.'),
(138, 2, 'PCI 9.8', 'Destroy media when it is no longer needed for business or legal reasons.'),
(139, 2, 'PCI 9.9', 'Protect devices that capture payment card data via direct physical interaction with the card from tampering and substitution. This includes periodic inspections of POS device surfaces to detect tampering, and training personnel to be aware of suspicious activity.'),
(140, 2, 'PCI 9.10', 'Ensure that related security policies and operational procedures are documented, in use, and known to all affected parties.'),
(141, 2, 'PCI 10', 'Track and monitor all access to network resources and cardholder data'),
(142, 2, 'PCI 10.1', 'Implement audit trails to link all access to system components to each individual user.'),
(143, 2, 'PCI 10.2', ' Implement automated audit trails for all system components for reconstructing these events:  all individual user accesses to cardholder data; all actions taken by any individual with root  or administrative privileges; access to all audit trails; invalid logical access attempts; use of  and changes to identification and authentication mechanisms (including creation of new  accounts, elevation of privileges), and all changes, additions, deletions to accounts with root or  administrative privileges; initialization, stopping or pausing of the audit logs; creation and deletion  of system-level objects.'),
(144, 2, 'PCI 10.3', 'Record audit trail entries for all system components for each event, including at a minimum: user  identification, type of event, date and time, success or failure indication, origination of event, and  identity or name of affected data, system component or resource.'),
(145, 2, 'PCI 10.4', 'Using time synchronization technology, synchronize all critical system clocks and times and  implement controls for acquiring, distributing, and storing time.'),
(146, 2, 'PCI 10.5', 'Secure audit trails so they cannot be altered.'),
(147, 2, 'PCI 10.6', 'Review logs and security events for all system components to identify anomalies or suspicious  activity. Perform critical log reviews at least daily.'),
(148, 2, 'PCI 10.7', 'Retain audit trail history for at least one year; at least three months of history must be immediately  available for analysis.'),
(149, 2, 'PCI 10.8', 'Service providers must implement a process for timely detection and reporting of failures of critical  security control systems.'),
(150, 2, 'PCI 10.9', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties.'),
(151, 2, 'PCI 11', 'Regularly test security systems and processes'),
(152, 2, 'PCI 11.1', 'Implement processes to test for the presence of wireless access points (802.11) and detect and identify all authorized and unauthorized wireless access points on a quarterly basis. Maintain an inventory of authorized wireless access points and implement incident response procedures in the event unauthorized wireless access points are detected.'),
(153, 2, 'PCI 11.2', ' Run internal and external network vulnerability scans at least quarterly and after any significant  change in the network. Address vulnerabilities and perform rescans as needed, until passing scans  are achieved. After passing a scan for initial PCI DSS compliance, an entity must, in subsequent  years, complete four consecutive quarters of passing scans. Quarterly external scans must be performed by an Approved Scanning Vendor (ASV). Scans conducted after network changes and  internal scans may be performed by internal staff.'),
(154, 2, 'PCI 11.3', 'Develop and implement a methodology for penetration testing that includes external and  internal penetration testing at least annually and after any significant upgrade or modification. If  segmentation is used to reduce PCI DSS scope, perform penetration tests at least annually to verify  the segmentation methods are operational and effective. Service providers using segmentation  must confirm PCI DSS scope by performing penetration testing on segmentation controls at least  every six months and after making changes to these controls.'),
(155, 2, 'PCI 11.4', 'Use network intrusion detection and/or intrusion prevention techniques to detect and/or prevent  intrusions into the network. Monitor all traffic at the perimeter of the cardholder data environment  as well as at critical points inside of the cardholder data environment, and alert personnel to  suspected compromises. IDS/IPS engines, baselines, and signatures must be kept up to date. '),
(156, 2, 'PCI 11.5', 'Deploy a change detection mechanism (for example, file integrity monitoring tools) to alert personnel to unauthorized modification (including changes, additions, and deletions) of critical  system files, configuration files or content files. Configure the software to perform critical file  comparisons at least weekly. Implement a process to respond to any alerts generated by the  change-detection solution.'),
(157, 2, 'PCI 11.6', 'Ensure that related security policies and operational procedures are documented, in use, and  known to all affected parties.'),
(158, 2, 'PCI 12', 'Maintain a policy that addresses information security for all personnel'),
(159, 2, 'PCI 12.1', 'Establish, publish, maintain, and disseminate a security policy; review the security policy at least  annually and update when the environment changes.'),
(160, 2, 'PCI 12.2', 'Implement a risk assessment process that is performed at least annually and upon significant  changes to the environment that identifies critical assets, threats, and vulnerabilities, and results in  a formal assessment.'),
(161, 2, 'PCI 12.3', 'Develop usage policies for critical technologies to define their proper use by all personnel. These  include remote access, wireless, removable electronic media, laptops, tablets, handheld devices, email and Internet. '),
(162, 2, 'PCI 12.4', 'Ensure that the security policy and procedures clearly define information security responsibilities  for all personnel. Service providers must also establish responsibility for their executive  management for the protection of cardholder data and a PCI DSS compliance program.'),
(163, 2, 'PCI 12.5', 'Assign to an individual or team information security responsibilities defined by 12.5 subsections.'),
(164, 2, 'PCI 12.6', 'Implement a formal security awareness program to make all personnel aware of the cardholder  data security policy and procedures.'),
(165, 2, 'PCI 12.7', 'Screen potential personnel prior to hire to minimize the risk of attacks from internal sources. Example screening includes previous employment history, criminal record, credit history, and reference checks. '),
(166, 2, 'PCI 12.8', 'Maintain and implement policies and procedures to manage service providers with which cardholder data is shared, or that could affect the security of cardholder data.'),
(167, 2, 'PCI 12.9', 'Service providers acknowledge in writing to customers that they are responsible for the security  of cardholder data that they possess or otherwise store, process, or transmit on behalf of the  customer, or to the extent they could impact the security of the customer’s cardholder data environment. '),
(168, 2, 'PCI 12.10', 'Implement an incident response plan. Be prepared to respond immediately to a system breach.'),
(169, 2, 'PCI 12.11', 'Service providers must perform and document reviews at least quarterly to confirm personnel are  following security policies and operational procedures.');

-- --------------------------------------------------------

--
-- Table structure for table `Followup`
--

CREATE TABLE `Followup` (
  `FQID` int NOT NULL,
  `QID` int NOT NULL,
  `Question` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Followup`
--

INSERT INTO `Followup` (`FQID`, `QID`, `Question`) VALUES
(1, 1, 'Do you have a system and/or policy in place to monitor and review those audit logs?'),
(2, 2, 'Are all of your company web-facing applications (Example; Email, Web browsers, Company Website) protected against all known threats either by automated updates or using proper software to continuously monitor/filter traffic?'),
(3, 3, 'Are scans run regularly?\r\n'),
(4, 3, 'Is it being updated regularly?\r\n'),
(5, 4, 'Do you have a secure configuration for your network devices (i.e. firewalls, routers, switches)?\r\n'),
(6, 5, 'Is it reviewed and updated regularly?\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `Framework`
--

CREATE TABLE `Framework` (
  `FID` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Source` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Framework`
--

INSERT INTO `Framework` (`FID`, `Name`, `Source`) VALUES
(1, 'HIPAA (Health Insurance Portability and Accountability Act)', 'https://www.hhs.gov/hipaa/index.html'),
(2, 'PCI (Payment Card Industry)', 'https://www.pcisecuritystandards.org/'),
(3, 'CIS (Center for Internet Security)', 'https://www.cisecurity.org/controls/');

-- --------------------------------------------------------

--
-- Table structure for table `Question`
--

CREATE TABLE `Question` (
  `QID` int NOT NULL,
  `ParentQ` int NOT NULL DEFAULT '10000',
  `QText` varchar(1000) NOT NULL,
  `MoreDetail` text NOT NULL,
  `QSummary` varchar(100) DEFAULT NULL,
  `Criticality` int DEFAULT NULL,
  `CompliantAnswer` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'Yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Question`
--

INSERT INTO `Question` (`QID`, `ParentQ`, `QText`, `MoreDetail`, `QSummary`, `Criticality`, `CompliantAnswer`) VALUES
(1, 10000, 'Do you handle credit cards as payment?', '', 'Control Overview', NULL, NULL),
(2, 10000, 'Do you maintain a hardware inventory?', 'Maintain an accurate and up-to-date inventory of all technology assets with the potential to store or process information. This inventory shall include all hardware assets, whether connected to the organization\'s network or not. (see https://www.cisecurity.org/controls/inventory-and-control-of-hardware-assets/ for more details)', 'Inventory of Devices', 100, 'Yes'),
(3, 10000, 'Do you maintain a software inventory?', 'Do you inventory, track, and correct all software on the network so that only authorized software is installed and can execute? (see https://www.cisecurity.org/controls/inventory-and-control-of-software-assets/ for more details)', 'Inventory of Software', 100, 'Yes'),
(4, 10000, 'Do you continually assess security vulnerabilities and remediate them? (ex: updates)', 'Do you run SCAP vulnerablility scans or a similar software to detect network vulnerabilities on a weekly basis? Do you check and run updates on all hardware and software on the network on a regular basis? (see https://www.cisecurity.org/controls/continuous-vulnerability-management/ for more details)', 'Vulnerability Assessment', 90, 'Yes'),
(5, 10000, 'Do all users have unique IDs?', 'Every user should have their own username and password. There should be no shared accounts on the system. (See https://www.cisecurity.org/controls/controlled-use-of-administrative-privileges/ for more details)', 'Administrative Privileges', 90, 'Yes'),
(6, 10000, 'Are all company hardware devices and software configurations secure? (Example; Default passwords have been changed, unneccessary accounts are removed)', 'The Security Content Automation Protocol (SCAP) is a helpful tool for determining a secure configuration for a system and ensuring that the configuration is maintained. (See https://www.cisecurity.org/controls/secure-configuration-for-hardware-and-software-on-mobile-devices-laptops-workstations-and-servers/ for more details)', 'Secure Configurations', 90, 'Yes'),
(7, 10000, 'Do you have a system in place that creates audit trails/logs for administrator and user activity for all system components? Do you have a system and/or policy in place to monitor and review those audit logs?', 'Routers, smart switches, firewalls, computers, ect. have logging capabilities. Ensure that logging is turned on to capture administrative and user activity for every component on your system (see https://www.cisecurity.org/controls/maintenance-monitoring-and-analysis-of-audit-logs/ for more details).', 'Audit Logs', 85, 'Yes'),
(8, 10000, 'Are your employees (including leadership positions) trained about proper use of web-facing applications? (Example; Email, Web browsers, Company Website) Are all your company web-facing applications (Example; Email, Web browsers, Company Website) protected against all known threats either by automated updates or using proper software to continuously monitor/filter traffic?', 'Do users recieve training on phishing and other forms of exploitation and attack?', 'Email and Web Browser', 85, 'Yes'),
(9, 10000, 'Do you have an anti-virus program installed on all of your systems? Are scans run regularly? Is it being updated regularly?', 'Everything on your system should have anti-virus software installed and running (see https://www.cisecurity.org/controls/malware-defenses/ for more details).', 'Malware Defenses', 80, 'Yes'),
(10, 10000, 'Do you track, control, and correct the ongoing operational use of ports, protocols, and services?', 'Only authorized ports with a business need should be open. Port scans should be run on a regular basis to track this (see https://www.cisecurity.org/controls/limitation-and-control-of-network-ports-protocols-and-services/ for more details).', 'Network', 70, 'Yes'),
(11, 10000, 'Does your company have a back up plan?', 'System backups are important for recovering from a natural disaster or malicious attack. There are many different methods of backup, the cloud, hard drives, etc.', 'Data Recovery', 70, 'Yes'),
(12, 10000, 'Do you have an established firewall?', 'Firewalls protect your internal network from external sources. You can monitor internal network traffic and block data traffic based on security rules you set.', 'Network Devices', 70, 'Yes'),
(13, 10000, 'Does your company have defense mechanism to restrict network traffic?', 'For example an intrusion detection system (IDS). For more information see https://www.cisecurity.org/controls/boundary-defense/', 'Boundary Defense', 60, 'Yes'),
(14, 10000, 'Is your company doing anything to monitor and prevent the transfer of sensitive information?', 'This includes using tools on your network perimiters to monitor the transfer of data, block any unauthorized transfers, and alert security professionals of the incident. This can also include white listing specific USB devices to prevent unauthorized data transfer. For more details, see https://www.cisecurity.org/controls/data-protection/ ', 'Data Protection', 60, 'Yes'),
(15, 10000, 'Do you grant user access based on need to know?', 'The more access a user has to the system, the more access a hacker will have if they are able to gain access to the account. A user should only have as much access as they need to complete their specific job functions to mitigate this risk. For more deatails, see https://www.cisecurity.org/controls/controlled-access-based-on-the-need-to-know/', 'Controlled Access', 60, 'Yes'),
(16, 10000, 'Do you have a separate wireless network for personal or untrusted devices?', 'Wireless access control also involves scanning for unauthorized wireless access points which allow hackers a way to access your network from anywhere in the world. For more details, see https://www.cisecurity.org/controls/wireless-access-control/', 'Wireless Access Control', 55, 'Yes'),
(17, 10000, 'Do you use multi-factor authentication for all users?', 'Multi-factor authentication is usually either a prompt through an app on the user\'s phone or a text with a code that can be entered after the login screen. This allows the user\'s account to remain secure even if it\'s password has been compromized because an attacker would not only need to know the user\'s password, but they would also need access to their text messages or phone prompts. For more details, see https://www.cisecurity.org/controls/account-monitoring-and-control/', 'Account Control', 55, 'Yes'),
(18, 10000, 'Are your employees trained on compliance upon hiring? ', 'All employees should be given training on your security policies. It is best practice to evaluate employees upon hiring to know where to fill in the gaps in regards to their security awareness. For more details, see https://www.cisecurity.org/controls/implement-a-security-awareness-and-training-program/', 'Security Skills Assessment', 55, 'Yes'),
(19, 18, 'Are your employees given a periodic security skills assessment and trained on any areas to fill gaps?', 'All employees should be given training on your security policies upon hiring and at least annually thereafter to ensure they are aware of any new or updated security policies and that they remember the training they recieved when they were hired. For more details, see https://www.cisecurity.org/controls/implement-a-security-awareness-and-training-program/', NULL, 55, 'Yes'),
(20, 111, 'Do you analyze all internally developed software for good coding practices?', 'This can be done manually or with specialized tools. Analysis includes looking for logic errors, ensuring the code was tested against edge cases, and ensuring the ability to filter out potentially malicious input. For more details, see https://www.cisecurity.org/controls/application-software-security/', NULL, 50, 'Yes'),
(21, 10000, 'Do you have an incident response plan in place? ', 'A good incidnet response plan includes how to identify an incident, how to contain an incident, how to eradicate and incident, how to recover from an incident, and lessons learned. For more details, see https://www.cisecurity.org/controls/incident-response-and-management/', 'Incident Response', 50, 'Yes'),
(22, 10000, 'Does your company perform penetration testing or red team exercises at least annually?', 'Penetration testing is a common method to test the configuration of network devices, the response time of security/IT personnel, and the training of users. Regular penetration tests can expose weak spots in security policy and infrastructure. For more details, see https://www.cisecurity.org/controls/penetration-tests-and-red-team-exercises/', 'Penetration Tests', 50, 'Yes'),
(23, 10000, 'Do all users with administrative account access have a secondary account for tasks that do not require administrative permissions?', 'All admins should have a user level account for basic tasks. Admin accounts should only be used for administrative activities not internet browsing, email, or similar activities. (See https://www.cisecurity.org/controls/controlled-use-of-administrative-privileges/ for more details)', NULL, 90, 'Yes'),
(24, 7, 'Do you have a system and/or policy in place to monitor and review those audit logs?', 'A policy will help ensure that the logs are being reviewed on a regular basis and that logs from each system component are included in the review.', NULL, 85, 'Yes'),
(25, 8, 'Are all of your company web-facing applications (Example; Email, Web browsers, Company Website) protected against all known threats either by automated updates or using proper software to continuously monitor/filter traffic?', 'There are many ways to protect web-facing applications (see https://www.cisecurity.org/controls/email-and-web-browser-protections/ for more details).', NULL, 85, 'Yes'),
(26, 9, 'Are scans run regularly?', 'Automatic scans are easy to implement and ensure that your device is secure.', NULL, 80, 'Yes'),
(27, 9, 'Is it being updated regularly?', 'Anti-virus updates are crutial because they\'re constantly being updated to protect systems from new vulnerabilities and attack techniques.', NULL, 80, 'Yes'),
(28, 12, 'Do you have a secure configuration for your network devices (i.e. firewalls, routers, switches)?', 'Default configurations are not secure and should be changed as soon as possible (see https://www.cisecurity.org/controls/secure-configuration-for-network-devices-such-as-firewalls-routers-and-switches/ for more details).', NULL, 70, 'Yes'),
(29, 21, 'Is it reviewed and updated regularly?', 'An incident response plan should be updated at least annually or whenever a change is made to the system or roles.', NULL, 50, 'Yes'),
(30, 10000, 'Do you handle client health information?', 'Do you keep inventory of computer that contains health information?', 'Control Overview', NULL, NULL),
(31, 4, 'Is EHR modern and compatible with the latest software?', 'Electronic Health Records (EHR) is up-to-date and is compatible with latest software inplemented in the business', NULL, 90, 'Yes'),
(32, 6, 'Is an automatic logoff enabled for private files?', 'Does your computer or files automatically log off when not in use?', NULL, 90, 'Yes'),
(33, 14, 'Are printed medical records kept locked away and out of public view?', 'Are you keeping medical records out of public view and keeping it in a safe place?', NULL, 60, 'Yes'),
(34, 14, 'Is all thrid-party access restricted?', 'Are you restricting thrid-pary (non-authorized personnal) access?', NULL, 60, 'Yes'),
(35, 14, 'Does each individual have a unique 10 digit NPI (type 1 for individuals, type 2 for organizations)?', 'NPI is a single provider identification number that will be accepted and recognized by all health plans. Does your company have one? Also, do you have a method of figuring out which NPI is the right choice?', NULL, 60, 'Yes'),
(36, 14, 'Are there tools in place for encryption and decryption of private information?', 'Does your company have an encryption tool that only allows people with access to a secret key can read it', NULL, 60, 'Yes'),
(37, 14, 'When texting do both parties have encryption programs that allow for confidential data to be safely texted?', 'Does your company have an encryption tool installed on the phones to prevent from unauthorized people reading it?', NULL, 60, 'Yes'),
(38, 14, 'Do you keep records of all uses and disclosures of ePHI?', 'Does your company maintain ePHI for some period of time beyond when it has finished providing services?', NULL, 60, 'Yes'),
(39, 14, 'Do you have policies in place to govern how ePHI is removed from mobile device before re-used? ', 'Do you have a mechanism in place to control hoe ePHI is removed from any previous mobile devices before being re-used?', NULL, 60, 'Yes'),
(40, 14, 'Do you have mechanisms in place to authenticate ePHI?', 'Do you have any passwords or PIN to authenticate ePHI users?', NULL, 60, 'Yes'),
(41, 15, 'Is computer access periodically reviewed and updated? ', 'Is your facility hace limited access and secure?', NULL, 60, 'Yes'),
(42, 15, 'Have you designated an official privacy officer?', 'Are your patient files kept in a safe place?', NULL, 60, 'Yes'),
(43, 18, 'Is a notice of privacy practices posted?  ', 'Do you let your customers know of privacy law being practiced?', NULL, 55, 'Yes'),
(44, 19, 'Do you have any policies regarding the use of social media at work?', 'Do you train your employees about compliance upon hiring and on a regular basis?', NULL, 55, 'Yes'),
(45, 19, 'Do your employees understand the consequences for not following the privacy policies?', 'Do you restrict social media usage at work?', NULL, 55, 'Yes'),
(46, 21, 'Do you have a risk management policy in place?  ', 'Do you have a response plan in case of any breach regarding private information?', NULL, 50, 'Yes'),
(47, 10000, 'Has your contingency plan been tested?', 'Do you test your contingency plan for preparing for the breach?', NULL, 50, 'Yes'),
(48, 10000, 'Do you have processes in place to provide breach information without unreasonable delay no later than 60 days following discovery of a breach?', 'Do you have a procedure in place that will allow to provide breach information less than 60 days?', NULL, 50, 'Yes'),
(49, 10000, 'Do you submit notifications smaller than 500 individuals to HHS annually?', 'If a breach affects fewer than 500 individuals, the covered entity may notify the Secretary of such breaches on an annual basis.', NULL, 50, 'Yes'),
(50, 30, 'Do you have written consent forms for the disclosure of individual\'s health information?  ', '', NULL, 10, 'Yes'),
(51, 30, 'Do all covered entities in the practice have NPI?', '', NULL, 30, 'Yes'),
(52, 30, 'Do workstations have protective surrounding and are not visible from unrestricted areas?', '', NULL, 40, 'Yes'),
(53, 30, 'Have you performed risk analysis for ePHI?', '', NULL, 50, 'Yes'),
(54, 5, 'Do you have policies and procedures in place to ensure proper user account management?', 'This policy should cover when an employee has an account created and an auditing timeline for accounts. All users should be assigned a unique account before gaining access to cardholder data.', NULL, 90, 'Yes'),
(55, 23, 'Do you have authentication policies and procedures?', 'An authentication policy should include guidance on selecting strong authentication credentials, guidance for users on how to protect their credentials, instructions not to reuse passwords, and instructions to change their password if there is any suspicion the password has been compromised.', NULL, 90, 'Yes'),
(56, 23, 'Have they been implemented and communicated to all users?', 'Users should have access to and made aware of any policy stating user requirements.', NULL, 90, 'Yes'),
(57, 23, 'Is access to all databases with cardholder data restricted?', 'Access to cardholder data should only be granted on a need-to-know basis, meaning only users with specific roles that need access, have access.', NULL, 90, 'Yes'),
(58, 6, 'Do you have change control procedures?', 'Without properly documented and implemented change controls, security features could be inadvertently or deliberately omitted or rendered inoperable, processing irregularities could occur, or malicious code could be introduced.', NULL, 90, 'Yes'),
(59, 7, 'Do the audit trails include the following events: individual user access to cardholder data, all actions taken by any individual with root  or administrative privileges; access to all audit trails; invalid logical access attempts; use of  and changes to identification and authentication mechanisms (including creation of new  accounts, elevation of privileges), and all changes, additions, deletions to accounts with root or administrative privileges; initialization, stopping or pausing of the audit logs; creation and deletion  of system-level objects?    ', 'Generating audit trails of suspect activities alerts the system administrator, sends data to other monitoring mechanisms (like intrusion detection systems), and provides a history trail for post-incident follow-up. Logging of the following events enables an organization to identify and trace potentially malicious activites. By recording these details for the auditable events, a potential compromise can be quickly identified, and with sufficient detail to know who, what, where, when, and how.', NULL, 85, 'Yes'),
(60, 7, 'Are audit trails secured against modification?', 'Often a malicious individual who has entered the network will attempt to edit the audit logs in order to hide their activity. Without adequate protection of audit logs, their completeness, accuracy, and integrity cannot be guaranteed, and the audit logs can be rendered useless as an investigation tool after a compromise. ', NULL, 85, 'Yes'),
(61, 7, 'Are critical log reviews occuring daily?', 'Many breaches occur over days or months before being detected. Regular log reviews by personnel or automated means can identify and proactively address unauthorized access to the cardholder data environment.', NULL, 85, 'Yes'),
(62, 7, 'Are audit history logs retained for a year?', 'Retaining logs for at least a year allows for the fact that it often takes a while to notice that a compromise has occured or is occuring, and allows investigators sufficient log history to better determine the length of time of a potential breach and potential system(s) impacted.', NULL, 85, 'Yes'),
(63, 7, 'Are three months worth of logs available for immediate analysis?', 'By having three months of logs immediately available, an entity can quickly identify and minimize impact of a data breach. Storing logs off-line locations could prevent them from being readily available, resulting in longer time frames to restore log data, perform analysis, and identify impacted systems or data.', NULL, 85, 'Yes'),
(64, 7, 'Is there a policy or operational procedure for collecting and analyzing audit trails in a timely manner?', 'Without formal processes to detect and alert when critical security controls fail, failures may go undetected for extended periods and provide attackers ample time to compromise systems and steal sensitive data from the cardholder data environment. ', NULL, 85, 'Yes'),
(65, 7, 'Are they updated, in use, and known to all affected users?', 'Personnel need to be aware of and following security policies and daily operational procedures for monitoring all access to network resources and cardholder data on a continuous basis.', NULL, 85, 'Yes'),
(66, 9, 'Are audit logs generated from the anti-virus scans?  ', 'Audit logs provide the ability to monitor virus and malware activity and anti-malware reactions. Thus, it is imperative that anti-malware reactions. Thus, it is imperative that anti-malware solutions be configured to generate audit logs.', NULL, 80, 'Yes'),
(67, 9, 'Can the anti-virus be disabled by users without authorization from management (on a case-by-case basis and for a limited time)?', 'Use of policy-based controls on all systems to ensure anti-malware protections cannot be altered or disabled will help prevent system weaknesses from being exploited by malicious software.', NULL, 80, 'Yes'),
(68, 9, 'Are any anti-virus related policies up to date and known to all affected parties?', 'Personnel need to be aware of and following security policies and operational procedures to ensure systems are protected from malware on a continuous basis.', NULL, 80, 'Yes'),
(69, 10, 'Is your company limiting the access between public networks to systems that contain credit card information?', 'While there may be legitimate reasons for untrusted connections to be permitted to DMZ systems (e.g., to allow public access to a web server), such connections should never be granted to systems in the internal network. A firewall\'s intent is to manage and control all connections between public systems and internal systems, especially those that store, process or transmit cardholder data. If direct access is allowed between public systems and the CDE, the protections offered by the firewall are bypassed, and system components storing cardholder data may be exposed to compromise.', NULL, 70, 'Yes'),
(70, 12, 'Do you have an up to date network diagram?   ', 'Network diagrams describe how networks are configured, and identify the location of all network devices. Without current network diagrams, devices could be overlooked and be unknowingly left out of the security controls implemented for PCI DSS and thus be vulnerable to compromise.', NULL, 70, 'Yes'),
(71, 12, 'Is the network configuration reviewed every six months or whenever there is a change?', 'This review gives the organization an opportunity at least every six months to clean up any unneeded, outdated, or incorrect rules, and ensure that all rule sets allow only authorized services and ports that match the documented business justifications.', NULL, 70, 'Yes'),
(72, 12, 'Is firewall software (or equivalent software) installed on all devices?', 'Portable computing devices that are allowed to connect to the Internet from outside the corporate firewall are more vulnerable to Internet-based threats. Use of firewall functionality (e.g., personal firewall software or hardware) helps to protect devices from internet-based attacks, which could use the device to gain access to the organization\'s systems and data once the device is re-connected to the network.', NULL, 70, 'Yes'),
(73, 12, 'Is the firewall covered in a policy? Is it up to date, in use, and known to all affected parties?', 'Personnel need to be aware of the following security policies and operational procedures to ensure firewalls and routers are continuously managed to prevent unauthorized access to the network.', NULL, 70, 'Yes'),
(74, 13, 'Are all access to network resources and cardholder data tracked and monitored?', 'Logging mechanisms and the ability to track user activities are critical in preventing, detecting, or minimizing the impact of a data compromise. The presence of logs in all environments allows thourough tracking, alerting, and analysis when something does go wrong. Determining the cause of a compromise is very difficult, if not impossible, without system activity logs.', NULL, 60, 'Yes'),
(75, 14, 'Does your company use encryption for all non-console administrative access?', 'If non-console (including remote) administration does not use secure authentication and encrypted communications, sensitive administrative or operational level information (like administrator\'s IDs and passwords) can be revealed to an eavesdropper. A malicious individual could use this information to access the network, become administrator, and steal data.', NULL, 60, 'Yes'),
(76, 14, 'Do you protect cardholder data?', 'Protection methods such as encryption, truncation, masking, and hashing are critical components of cardholder data protection. If an intruder circumvents other security controls and gains access to encrypted data, without the proper cryptographic keys, the data is unreadable and unusable to that person. Other effective methods of protecting stored data should also be considered as potential risk mitigation opportunities. For example, not storing cardholder data unless absolutely necessary, truncating cardholder data if full PAN is not needed, and not sending unprotected PANs using end-user messaging technologies, such as e-mail and instant messaging.', NULL, 60, 'Yes'),
(77, 14, 'Do you limit cardholder data storage and retention time to that which is required for business, legal, and/ or regulatory purposes, as documented in your data retention policy?', 'A formal data retention policy identifies what data needs to be retained, and where that data resides so it can be securely destroyed or deleted as soon as it is no longer needed. The only cardholder data that may be stored after authorization is the primary account number or PAN (rendered unreadable), expiration date, cardholder name, and service code.', NULL, 60, 'Yes'),
(78, 14, 'Do you purge unnecessary cardholder data at least quarterly?', 'Identifying and deleting stored data that has exceeded its specified retention period prevents unnecessary retention of data that is no longer needed. This process may be automated or manual or a combination of both. For example, a programmatic procedure (automatic or manual) to locate and remove data and/or a manual review of data storage areas could be performed. If you don\'t need it, don\'t store it.', NULL, 60, 'Yes'),
(79, 14, 'Do you store sensitive authentication data after authorization?', 'Sensitive authentication data consists of full track data, card validation code or value, and PIN data. Storage of sensitive authentication data after authorization is prohibited. This data is valuable to malicious individuals as it allows them to generate couterfeit payment cards and create fraudulent transactions.', NULL, 60, 'No'),
(80, 14, 'Do you mask PAN when displayed (first 6 and last 4 digits are the maximum allowable)?', 'The display of full PAN on items such as computer screens, payment card receipts, faxes, or paper reports can result in this data being obtained by unauthorized individuals and used fraudulently. Ensuring that full PAN is only displayed for those with a legitimate business need to see the full PAN minimizes the risk of unauthorized persons gaining access to PAN data.', NULL, 60, 'Yes'),
(81, 14, 'Is PAN unreadable anywhere it is stored?', 'PANs stored in primary storage (databases, or flat files such as text files spreadsheets) as well as non-primary storage (backup, audit logs, exception or troubleshooting logs) must all be protected. One-way hash functions based on strong cryptography can be used to render cardholder data unreadable.  Hash functions are appropriate when there is no need to retrieve the original number (one-way hashes are irreversible). It is recommended, but not currently a requirement, that an additional, random input value be added to the cardholer data prior to hashing to reduce the feasibility of an attacker comparing the data against (and deriving the PAN from) tables of pre-computed hash values.', NULL, 60, 'Yes'),
(82, 14, 'Do you document and implement policies and procedures to manage and protect encryption keys for cardholder data from disclosure or misuse?', 'Cryptographic keys must be strongly protected because those who obtain access will be able to decrypt data. Key-encrpting keys, if used, must be at least as strong as the data-encrypting key in order to ensure proper protection of the key that encrypts the data as well as the data encrypted with that key. The requirement to protect keys from disclosure and misuse applies to both dat-encrypting keys and key-encrypting keys. Because one key-encrypting key may grant access to many data-encrypting keys, the key-encrypting keys require strong protection measures.', NULL, 60, 'Yes'),
(83, 14, 'Are your encryption policies and procedures up to date, implemented, and known to all affected parties?', 'The manner in which cryptographic keys are managed is a critical part of the continued security of the encryption solution. A good key-management process, whether it is manual or automated as part of the encryption product, is based on industry standards and addresses all key elementes. Providing guidance to customers on how to securely transmit, store and update cryptographic keys can help prevent keys from being mismanaged or disclosed to unauthorized entities. This requirement applies to keys used to encrypt stored cardholder data, and any respective key-encrypting keys.', NULL, 60, 'Yes'),
(84, 14, 'Do you encrypt transmission of cardholder data across open, public networks?', 'Sensitive information must be encrypted during transmission over networks that are easily accessed by malicious individuals. Misconfigured wireless networks and vulnerabilities in legacy encryption and authentication protocols continue to be targets of malicious individuals who exploit these vulnerabilities to gain privileged access to cardholder data environments.', NULL, 60, 'Yes'),
(85, 14, 'Do you ensure that wireless networks transmitting cardholder data or connected to the cardholder data environment use industry best practices to implement strong encryption for authentication and transmission?', 'Sensitive information must be encrypted during transmission over public networks, because it is easy and common for a malicious individual to intercept and/or divert data while in transit. Secure transmission of cardholder data requires using trusted keys/certificates, a secure protocol for transport, and proper encryption strength to encrypt cardholder data. Connection requests from systems that do not support the required encryption strength, and that would result in an insecure connection, should not be accepted.', NULL, 60, 'Yes'),
(86, 14, 'Do you maintain strict control over the distribution (internal and external), storage, and access of all media?', 'E-mail, instant messaging, SMS, and chat can be easily intercepted by packet-sniffing during delivery across internal and public networks. Do not utilize the messaging tools to send PAN unless they are configured to provide strong encryption. Media may be lost or stolen if sent via a non-trackable method such as regular postal mail. Use of secure couriers to deliver any media that contains cardholder data allows organizations to use their tracking systems to maintain inventory and location of shipments.', NULL, 60, 'Yes'),
(87, 14, 'Do you destroy media when it is no longer needed?', 'If steps are not taken to destroy information contained on hard disks, portable drives, CD/DVDs, or paper prior to disposal, malicious individuals may be able to retrieve information from the disposed media, leading to a data compromise. For example, malicious individuals may use a technique known as \"dumpster diving\" where they search through trashcans and recycle bins looking for information they can use to launch an attack. Examples of methods for securely destroying electronic media include secure wiping, degaussing, or physical destruction (such as grinding or shredding hard disks).', NULL, 60, 'Yes'),
(88, 15, 'Do you restrict and monitor physical access to cardholder data?', 'Without physical access controls, such as badge systems and door controls, unauthorized persons could potentially gain access to the facility to steal, disable, disrupt, or destroy critical systems and cardholder data. Locking console login screens prevents unauthorized persons from gaining access to sensitive information, altering system configurations, introducing vulnerabilities into the network, or destroying records. Physical access should only be granted to authorized personnel based on need to know and according to job responsibilities.', NULL, 60, 'Yes'),
(89, 15, 'Is access to sensitive areas based on specific job function?', 'The more people who have access to cardholder data, the more risk there is that a user\'s account will be used maliciously. Limiting access to those with a legitimate business reason for the access helps an organization prevent mishandling of cardholder data through inexperience or malice. In order to limit access to cardholder data to only those individuals who need such access, first it is necessary to define access needs for each role (ex. system administrator, call center personnel, store clerk), the systems/devices/data each role needs access to, and the level of privilege each role needs to effectively perform assigned tasks.', NULL, 60, 'Yes'),
(90, 15, 'Is physical access revoked immediately upon termination?', 'When personnel leave the organization, all physical access mechanisms should be returned or disabled promptly (as soon as possible) upon their departure, to ensure personnel cannot gain physical access to sensitive areas once their employment has ended.', NULL, 60, 'Yes'),
(91, 15, 'Do you have procedures to easily distinguish between onsite personnel and visitors (ex. badges)?', 'Identifying authorized visitors so they are easily distinguished from onsite personnel prevents unauthorized visitors from being granted access to areas containing cardholder data.', NULL, 60, 'Yes'),
(92, 15, 'Are all visitors authorized before entering areas where cardholder data is processed or maintained?', 'Visitor controls are important to reduce the ability of unauthroized and malicious persons to gain access to facilities (and potentially, to cardholder data). Visitor controls ensure visitors are identifiable as visitors so personnel can monitor their activities, and that their access is restricted to just the duration of their legitimate visit.', NULL, 60, 'Yes'),
(93, 15, 'Are visitors asked to surrender the physical badge before leaving the facility or at the date of expiration?', 'Ensuring that visitor badges are returned upon expiry or completion of the visit prevents malicious persons from using a previously authorized pass to gain physical access into the building after the visit has ended.', NULL, 60, 'Yes'),
(94, 15, 'Do you use a visitor log to maintain a physical audit trail of visitor information and activity, including visitor name, company, and the onsite personnel authorizing physical access?', 'A visitor log documenting minimum information on the visitor is easy and inexpensive to maintain and will assist in identifying physical access to a building or room, and potential access to cardholder data.', NULL, 60, 'Yes'),
(95, 15, 'Is the visitor log retained for at least three months?', 'A visitor log documenting minimum information on the visitor is easy and inexpensive to maintain and will assist in identifying physical access to a building or room, and potential access to cardholder data.', NULL, 60, 'Yes'),
(96, 17, 'Are authentication methods such as smart cards or security tokens only applied to individual accounts?', 'If user authentication mechanisms such as tokens, smart cards, and certificates can be used by multiple accounts, it may be impossible to identify the individual using the authentication mechanism. Having physical and/or logical controls (for example, a PIN, biometric data, or a password) to uniquely identify the user to the account will prevent unauthorized users from gaining access through use of a shared authentication mechanism.', NULL, 55, 'Yes'),
(97, 18, 'Do you maintain a policy that addresses information security for all personnel?', 'A strong security policy sets the security tone for the whole entity and informs personnel what is expected of them. All personnel should be aware of the sensitivity of data and their responsibilities for protecting it. Without clearly defined security roles and responsibilities assigned, there could be inconsistent interaction with the security group, leading to unsecured implementation of technologies or use of outdated or unsecurited technologies.', NULL, 55, 'Yes'),
(98, 18, 'Do you review and update the policy annually or whenever there is a change to the environment?', 'A company\'s information security policy creates the roadmap for implementing security measures to protect its most valuable assets. All personnel should be aware of the sensitivity of data and their responsibilities for protecting it.', NULL, 55, 'Yes'),
(99, 18, 'Do you have a security awareness program to train users on their responsibilities defined in the Information Security policy?', 'Each person or team with responsibilities for information security management should be clearly aware of their responsibilities and related tasks, through specific policy. Without this accountability, gaps in processes may open access into critical resources or cardholder data.', NULL, 55, 'Yes'),
(100, 18, 'Do you perform and document reviews to ensure employees understand and follow security policies and operational procedures at least quarterly?', 'Regularly confirming that security policies and procedures are being followed provides assurance that the expected controls are active and working as intended. The objective of these reviews is not to re-perform other PCI DSS requirements, but to confirm whether procedures are being followed as expected.', NULL, 55, 'Yes'),
(101, 22, 'Do you check for any unauthorized wireless access points?', 'Implementation and/or exploitation of wireless technology within a network are some of the most common paths for malicious users to gain access to the network and cardholder data. If a wireless device or network is installed without a company\'s knowledge, it can allow an attacker to easily and \"invisibly\" enter the network. Unauthorized wireless devices may be hidden within or attached to a computer or other system component, or be attached directly to a network port or network device, such as a switch or router. Any such unauthorized device could result in an unauthorized access point into the environment.', NULL, 50, 'Yes'),
(102, 22, 'Do you use network intrusion detection or intrusion prevention techniques?', 'Intrusion detection and/or intrusion prevention techniques (such as IDS/IPS) compare the traffic coming into the network with known \"signatures\" and/or behaviors of thousands of compromise types (hacker tools, Trojans, and other malware), and send alerts and/or stop the attempt as it happens. Without a proactive approach to unauthorized activity detection, attacks on (or misuse of) computer resources could go unnoticed in real time. Security alerts generated by these techniques should be monitored so that the attempted intrusions can be stopped.', NULL, 50, 'Yes'),
(103, 22, 'Do you have a change detection mechanism running to alert personnel if there is a change to any critical system files?', 'Change detection solutions such as file-integrity monitoring (FIM) tools check for changes, additions, and deletions to critical files, and notify when such changes are detected. If not implemented properly and the output of the change detection solution monitored, a malicious individual could add, remove, or alter configuration file contents, operating system programs, or application executables. Unauthorized changes, if undetected, could render existing security controls ineffective and/or result in cardholder data being stolen with no perceptible impact to normal processing.', NULL, 50, 'Yes'),
(104, 22, 'Is the software programmed to run file comparisons at least weekly?', 'Change detection solutions such as file-integrity monitoring (FIM) tools check for changes, additions, and deletions to critical files, and notify when such changes are detected. If not implemented properly and the output of the change detection solution monitored, a malicious individual could add, remove, or alter configuration file contents, operating system programs, or application executables. Unauthorized changes, if undetected, could render existing security controls ineffective and/or result in cardholder data being stolen with no perceptible impact to normal processing.', NULL, 50, 'Yes'),
(105, 22, 'Do you have processes in place for how to respond to an alert generated by the change-detection solution?', 'Change detection solutions such as file-integrity monitoring (FIM) tools check for changes, additions, and deletions to critical files, and notify when such changes are detected. If not implemented properly and the output of the change detection solution monitored, a malicious individual could add, remove, or alter configuration file contents, operating system programs, or application executables. Unauthorized changes, if undetected, could render existing security controls ineffective and/or result in cardholder data being stolen with no perceptible impact to normal processing.', NULL, 50, 'Yes'),
(106, 1, 'Do you protect devices that capture payment card data via direct physical interaction with the card from tampering and substitution?    ', 'Criminals attempt to steal cardholder data by stealing and/or manipulating card-reading devices and terminals. For example, they will try to steal devices so they can learn how to break into them, and they often try to replace legitimate devices with fraudeulent devices that send them payment card information every time a card is entered. Criminals will also try to add \"skimming\" components to the outside of devices, wich are designed to capture payment card details before they even enter the device for example, by attaching an additional card reader on top of the legitimate card reader so that the payment card details are captured twice: once by the criminal\'s component and then by the device\'s legitimate component.', NULL, 50, 'Yes'),
(107, 1, 'Do you train personnel to be aware of suspicious activity around POS devices?', 'Criminals attempt to steal cardholder data by stealing and/or manipulating card-reading devices and terminals. For example, they will try to steal devices so they can learn how to break into them, and they often try to replace legitimate devices with fraudeulent devices that send them payment card information every time a card is entered. Criminals will also try to add \"skimming\" components to the outside of devices, wich are designed to capture payment card details before they even enter the device for example, by attaching an additional card reader on top of the legitimate card reader so that the payment card details are captured twice: once by the criminal\'s component and then by the device\'s legitimate component. Personnel should be aware of these methods and protect the integrity of POS devices.', NULL, 50, 'Yes'),
(108, 1, 'Do you screen personnel prior to hire to minimize the chance of an internal attack?', 'Performing thourough background investigations prior to hiring potential personnel who are expected to be given access to cardholder data reduces the risk of unauthorized use of PANs and other cardholder data by individuals with questionable or criminal backgrounds.', NULL, 45, 'Yes'),
(109, 1, 'Do you maintain and implement policies and procedures to manage service providers with which cardholder data is shared, or that could affect the security of cardholder data?', 'If a merchant or service provider shares cardholder data with a service provider, certain requirements apply to ensure continued protection of this data will be enforced by such service providers. Some examples of the different types of service providers include backup tape storage facilities, managed service providers such as web-hosting companies or security service providers, entities that receive data for fraud-modeling purposes, etc.', NULL, 70, 'Yes'),
(110, 1, 'Do your service providers acknowledge in writing to you that they are responsible for the security of cardholder data that they possess or otherwise store, process, or transmit on behalf of the customer, or to the extent they could impact the security of the customer’s cardholder data environment?', 'This requirement is intended to promote a consistent level of understanding between service providers and their customers about their applicable PCI DSS respnsibilities. The acknowledgement of the service providers evidences their commitment to maintaining proper security of cardholder data that it obtains from its clients. The service provider\'s internal policies and procedures related to their customer engagement process and any templates used for written agreements should include provision of an applicable PCI DSS acknowledgement to their customers. The method by which the service provider provides written acknowledgement should be agreed between the provider and their customers.', NULL, 70, 'Yes'),
(111, 10000, 'Do you develop software internally?', 'Does your organization create its own software for internal or external use?', 'Application Security', 50, NULL),
(10000, 10000, 'No Follow-up Questions', '', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Question_Control`
--

CREATE TABLE `Question_Control` (
  `QCID` int NOT NULL,
  `QuestionID` int NOT NULL,
  `ControlID` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Question_Control`
--

INSERT INTO `Question_Control` (`QCID`, `QuestionID`, `ControlID`) VALUES
(1, 1, NULL),
(2, 2, 21),
(3, 3, 22),
(4, 4, 23),
(5, 5, 24),
(6, 6, 25),
(7, 7, 26),
(8, 8, 27),
(9, 9, 28),
(10, 10, 29),
(11, 11, 30),
(12, 12, 31),
(13, 13, 32),
(14, 14, 33),
(15, 15, 34),
(16, 16, 35),
(17, 17, 36),
(18, 18, 37),
(19, 19, 37),
(20, 20, 38),
(21, 21, 39),
(22, 22, 40);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Control`
--
ALTER TABLE `Control`
  ADD PRIMARY KEY (`ConrolID`),
  ADD KEY `Framework` (`FrameworkID`),
  ADD KEY `FrameworkID` (`FrameworkID`);

--
-- Indexes for table `Followup`
--
ALTER TABLE `Followup`
  ADD PRIMARY KEY (`FQID`),
  ADD KEY `QID` (`QID`);

--
-- Indexes for table `Framework`
--
ALTER TABLE `Framework`
  ADD PRIMARY KEY (`FID`);

--
-- Indexes for table `Question`
--
ALTER TABLE `Question`
  ADD PRIMARY KEY (`QID`),
  ADD KEY `test10` (`ParentQ`);

--
-- Indexes for table `Question_Control`
--
ALTER TABLE `Question_Control`
  ADD PRIMARY KEY (`QCID`),
  ADD KEY `test7` (`QuestionID`),
  ADD KEY `test 8` (`ControlID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Control`
--
ALTER TABLE `Control`
  MODIFY `ConrolID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=170;

--
-- AUTO_INCREMENT for table `Followup`
--
ALTER TABLE `Followup`
  MODIFY `FQID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Framework`
--
ALTER TABLE `Framework`
  MODIFY `FID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `Question`
--
ALTER TABLE `Question`
  MODIFY `QID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10004;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Control`
--
ALTER TABLE `Control`
  ADD CONSTRAINT `test` FOREIGN KEY (`FrameworkID`) REFERENCES `Framework` (`FID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `Question`
--
ALTER TABLE `Question`
  ADD CONSTRAINT `test10` FOREIGN KEY (`ParentQ`) REFERENCES `Question` (`QID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `Question_Control`
--
ALTER TABLE `Question_Control`
  ADD CONSTRAINT `test 8` FOREIGN KEY (`ControlID`) REFERENCES `Control` (`ConrolID`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `test7` FOREIGN KEY (`QuestionID`) REFERENCES `Question` (`QID`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
