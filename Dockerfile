FROM rpi-chromium

# Install Node.js v8.x
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install --no-install-recommends -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update -y && \
    apt-get install --no-install-recommends -y yarn && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install git
RUN apt-get update -y && \
    apt-get install --no-install-recommends -y git && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

RUN cd /root && \
    git clone https://github.com/prince0203/fast-speed-test.git && \
    cd fast-speed-test && \
    git checkout rpi-docker && \
    yarn

WORKDIR /root/fast-speed-test

ENTRYPOINT ["node", "index.js", "--chrome-executable", "/usr/bin/chromium-browser"]
