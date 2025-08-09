# 🛡️ Security (Updates in progress...)
### Shows the best programs / websites for security. 


***

### File & URL scanning

- ⭐ [Virustotal](https://www.virustotal.com)

- [Kaspersky Cloud](https://opentip.kaspersky.com/): Most features require you to pay.

- [Hybrid Analysis](https://www.hybrid-analysis.com/): Similar to Virustotal.

***

### Antiviruses

:::warning Note:
Antivirus software is usually bloatware. Stick to trusted sources for games and software and you will be fine with nothing but Windows Defender and an occasional Malwarebytes scan. Also remember to always scan setup / installation files with Virustotal, Kaspersky Cloud, Malwarebytes or Windows Defender.
:::

- [Malwarebytes](https://www.malwarebytes.com/mwb-download/thankyou/)

:::warning It's best to stick with the free version of Malwarebytes along side Windows Defender. This allows you to run accurate on-demand scans along side Windows Defenders great real-time protection without them conflicting with each other.
:::

- [BitDefender](http://www.bitdefender.com/solutions/free.html): Alternative to Windows Defender / Use the free trial version and when the trial is about to end, simply restart the trial with another account.

***

How to remove malware from your computer:

 **Tip:** Windows 10 and below is no longer supported by Microsoft and **UNSAFE** to use. If you are still running Windows 10 with a **LEGIT** license, you can obtain a free upgrade to Windows 11 by using the [Windows 11 Upgrade Assistant](https://support.microsoft.com/en-us/topic/windows-update-assistant-3550dfb2-a015-7765-12ea-fba2ac36fb3f) from Microsoft. They have been very generous in continuing to allow users to upgrade from Windows 10 at no charge. Do this upgrade AFTER your system has been cleaned of malware. A system image backup is highly recommended before starting this process. This backup can be performed to an external hard drive with the Backup & Restore tool located in the Control Panel on Windows 10 and below.

 

**Purpose & Scope of this Guide:**

This guide is designed to assist you in removing malware from an infected system that successfully boots. If your computer is completely unable to boot due to malware, please make a post on r/techsupport on Reddit, as this guide will not help you. If you perform the following steps exactly as described, this will solve your problem in over 90% of scenarios. That said, not all malware is created equal, and not all malware removal tools are created equal. The tools recommended in this guide were picked because of their high success and low failure rates, measured on a very large scale. However, there will be times that this guide fails in removing malware. If that is the case, please make a post on r/techsupport on Reddit for further assistance, stating that this guide was unsuccessful. It is recommended to only accept advice from a **“Trusted”** technician. I am writing this guide in layman’s terms so that most people will be able to understand it with ease.

 

**Disclaimer:**

The following instructions are recommendations only. You take full responsibility for any steps you choose to perform on your computer. While the following recommendations are performed without issue on countless machines, there is always a risk of damaging your Operating System or experiencing data loss on any machine. It is solely **YOUR** responsibility to save all work and back up any and all important data on your system before proceeding.

 

**Malware Remediation Steps:**

Before proceeding, go into your browser’s extensions and remove all suspicious items. Also go into your browser’s settings and remove any default search providers and unusual homepages. If you are unsure how to do this, proceed to Step 1.

 

Download and run the following tools in this order. Run all tools unless otherwise instructed. All tools should be run in Normal Mode (not Safe Mode) unless you are unable to boot Normal Mode, or the scans fail in Normal Mode. All tools must be run under an Administrator account. Do not remove any tool-generated logs in the event a helper needs you to share them to further assist you.

 

1) Run [rkill.com](https://www.bleepingcomputer.com/download/rkill/dl/10/). Sometimes it takes a few minutes to finish. Do not reboot when done.

:::warning Note:
It kills running malicious processes, removes policies in the registry that prevent normal OS operation and repairs file extension hijacks. *Note that it may not terminate newer malware as it's last update was in 2018, however, other fixes regarding the registry and file extensions still work.*
:::

 

2) Download an updated copy [Malwarebytes](https://www.malwarebytes.com/mwb-download/thankyou/). Turn on the “Scan for Rootkits” option. Then, run a “Scan”.

    Successfully removes the vast majority of infections

    Has an industry-leading, lightning-fast scanning & heuristics engine

    Has built-in repair tools to fix damage done by malware

 

3) Run [Malwarebytes ADWCleaner](https://toolslib.net/downloads/viewdownload/1-adwcleaner/) and then click the “Scan Now” button.

    Removes majority of adware, PuPs, Toolbars, and Browser hijacks

    Scans for bloatware & pre-installed software and lets you quarantine any or all of it.

    Fixes proxy settings changed by malware

    Removes certain non-default browser settings

 
Optional, Advanced Step (only run if previous tools fail to solve problem):

4) Run Sophos [HitmanPro](http://get.hitmanpro.com/)

HitmanPro is a phenomenal "second-opinion" malware scanner. I recommend clicking "Settings" and uncheck "Scan for tracking cookies" before starting the scan. This will drastically reduce scan times. This tool can only be run ONCE for free. Use it wisely.

 

Please note: If malware has prohibited you from browsing the web or downloading files, you can try running the [Complete Internet Repair](https://rizonesoft.com/downloads/complete-internet-repair/) or [NetAdapter Repair All-In-One](https://www.bleepingcomputer.com/download/netadapter-repair-all-in-one/) with all options checked which will attempt to restore your internet connection & default browser settings. You may have to download these tools on another computer and move them to a flash drive that you can plug into the infected machine.

**Workaround on Windows:**

Download and start [System Informer](https://systeminformer.sourceforge.io/), if you notice that an application is using too much processing power, do the full scan with MalwareBytes and RESTART (don't turn off) the machine.
Then run [MRT](https://www.microsoft.com/en-us/download/details.aspx?id=16) and reboot by holding down shift. Start Windows in troubleshooting mode. If the problem reappears, you'll need to clean install or check if it is a hardware problem.

**Think your Mac is infected?**

Try [Malwarebytes Anti-Malware for Mac](https://www.malwarebytes.com/mac/). Please make a post on r/techsupport on Reddit if it is unsuccessful.

 

If you have run all of the above tools successfully, you should be malware-free. If you are still experiencing problems, please make a post on Reddit in r/techsupport on for further assistance.

:::tip [Here are some good on demand scanners for files over 650 mb](https://www.reddit.com/r/antivirus/comments/jh3s0g/virus_deleted_or_not/g9v2n1k/)
:::

**Follow-up Steps (highly recommended):**

Using a computer that has not been infected, change passwords to all your online accounts.

Consider enabling two-factor authentication on all accounts!

Install a better anti-virus. See recommendations below.

 

**What is malware?**

[Malware](http://en.wikipedia.org/wiki/Malware) is an umbrella term used to refer to a variety of forms of hostile or intrusive software, including computer viruses, pups, worms, trojan horses, ransomware, spyware, adware, scareware, and other malicious programs. It can take the form of executable code, scripts, active content, and other software. 

 

**How did I get infected?**

It is difficult to track down the source of an infection. Most infections are actually given permission to run unknowingly by the user. It is recommended to keep User Account Control turned on and never give access to something you do not trust or did not open. Many other infections come via exploits in your browser or browser plug-ins on websites you visit. Always be very careful what you install. Make sure you trust the source implicitly. When downloading programs, always use the publisher’s website directly.

 

**How to prevent future infections:**

Be very careful what you download and install. Keep your software up-to-date. Using Ninite for installing/updating software is very easy & safe and uses official installers without adding extra software to your PC during installation. Make sure Windows is kept up-to-date as well, including Windows 10 feature updates. Many Windows updates patch exploits and vulnerabilities in your operating system. Most infections are active because the user has unknowingly given it Administrative permission to install and run. The first line of defense starts with you.

**How to avoid malware:**

If you're going to download software/games, definitely avoid the [piratebay](https://www.reddit.com/r/Piracy/comments/cxbn33/psa_ransomware_all_current_vegas_pro_17_torrents/). They have an immense amount of fake torrents and it's just not worth the risk of wading through their crap heap.

If you're going to download other torrents that aren't software, you can at least take preliminary measures that you're not running a fake file, even if you download from trustworthy torrent sites.

The following examples use video files as an example, and while it is wholly possible to include malware in anything, malware in files like video files, music files, isn't a likely scenario. Even then, they would have to target a specific program (ie. a specific video player) to attempt to exploit in order to tailor a video file with malware only meant to be able to run on such a video player. The main idea here is to use up-to-date programs in order to prevent being a victim of most of these exploits.

If you're looking for video, obviously an exe file is not what you're looking for, so that's an obvious candidate for the trash bin. Other attack vectors include intentionally bloated videos that simply contain messages like "download `x` codec to properly view this video". In the download folder there may be a link or executable to install the supposed "codecs", which will obviously be malware.

SFX files may also be used to spread malware, as they are "self extracting executables", but by all intents and purposes treated as executables themselves. Do not run software if you do not trust the source.

Pay close attention to the file icon to make sure that it's recognized as a video file instead of anything else. If you have file extensions hidden, files such as `NotAVirus.mp4.exe` will simply show as `NotAVirus.mp4`, but they'll show the executable icon because Windows sees the real file extension. Make sure you [unhide file extensions](https://support.winzip.com/hc/en-us/articles/115011457948-How-to-configure-Windows-to-show-file-extensions-and-hidden-files).

::: danger  Be on the lookout for RTL naming schemes that may make a filename of `filename.3pm.exe` be displayed as `filename.exe.mp3`: [Further Reading](https://web.archive.org/web/20200302081101/https://resources.infosecinstitute.com/spoof-using-right-to-left-override-rtlo-technique-2/).
Also, pay attention to [IDN homograph attacks.](https://en.wikipedia.org/wiki/IDN_homograph_attack)
:::

Another attack vector includes Windows shortcuts, which will provide (as an example) a supposed videofile.avi video file but it's actually shortcut to a batch / powershell other type of script, and won't show as such even with file extensions shown. The file icon may also be one similar to that of a video player's, but if you pay close attention to it, you'll notice an arrow in the corner that indicates it's a `shortcut`. Also note the `file type` column in file explorer showing shortcut, the tiny filesize is a giveaway, but these attack vectors typically 0-byte pad the file to inflate the filesize, in an attempt to make it look more convincing. [Recommended reading on this topic](https://blog.trendmicro.com/trendlabs-security-intelligence/rising-trend-attackers-using-lnk-files-download-malware/). This type of download will never not be malware.

Use proper video players instead of the default Windows media player, I recommend VLC.

Popular video file types will be avi, mp4, mkv. wmv, wma video / audio containers' specs allow for scripts, which windows media player can try to run.

::: danger  Not very common, but .scr files are "screensaver setter" files that are actually just executables. Avoid these.
:::
